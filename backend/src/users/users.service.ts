import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengeService } from '@shared/challenge/challenge.service';
import { CreateChallengeDto } from '@shared/challenge/dto/create-challenge.dto';
import { Inventory } from '@shared/inventory/entities/inventory.entity';
import { BpService } from 'src/bp/bp.service';
import { Bp } from 'src/bp/entities/bp.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { CHALLENGE } from '@shared/app.service';
import { Challenge } from '@shared/challenge/entities/challenge.entity';
import { CreateItemDto } from '@shared/items/dto/create-item.dto';
import { config } from '@shared/config/config.controller';
import { ItemsService } from '@shared/items/items.service';
import { UpdateChallengeDto } from '@shared/challenge/dto/update-challenge.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    private challengeService: ChallengeService,
    private itemsService: ItemsService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const bp = new Bp();
    const inventory = new Inventory();
    inventory.items = [];
    const user = new User();
    user.email = createUserDto.email;
    user.name = createUserDto.name;
    user.password = createUserDto.password;
    user.bp = bp;
    user.inventory = inventory;

    const challenges = [];
    for (const challengeDto of CHALLENGE) {
      challengeDto.user = user;
      const challenge = await this.challengeService.create(
        challengeDto as CreateChallengeDto,
      );
      challenges.push(challenge);
    }
    user.challenges = challenges;

    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find({
      relations: ['bp', 'challenges', 'inventory'],
    });
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne({
      relations: {
        bp: true,
        challenges: true,
        inventory: true,
      },
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({
      id: id,
    });
    if (!user) {
      throw new NotFoundException(id);
    }
    if (updateUserDto.coin !== undefined) {
      user.coin = updateUserDto.coin;
    }
    if (updateUserDto.email !== undefined) {
      user.email = updateUserDto.email;
    }
    if (updateUserDto.name !== undefined) {
      user.name = updateUserDto.name;
    }
    if (updateUserDto.password !== undefined) {
      user.password = updateUserDto.password;
    }
    return await this.usersRepository.save(user);
  }

  async makeOrder(id: number, menuIds: number[]) {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
      relations: ['bp', 'challenges', 'inventory'],
    });

    const inventory = await this.inventoryRepository.findOne({
      where: {
        id: user.inventory.id,
      },
      relations: ['items'],
    });

    if (!user) {
      throw new NotFoundException(id);
    }

    const curLevel = Math.floor(user.bp.exp / 1000);
    user.bp.exp += 100;
    for (let i = 0; i < user.challenges.length; i++) {
      const challenge = user.challenges[i];
      if (
        menuIds.find((id) => id === challenge.menuId && !challenge.completed)
      ) {
        const dto = new UpdateChallengeDto();
        dto.completed = true;
        user.bp.exp += challenge.exp;
        user.challenges[i] = await this.challengeService.update(
          challenge.id,
          dto,
        );
      }
    }

    const newLevel = Math.floor(user.bp.exp / 1000);

    for (let i = curLevel; i < newLevel; i++) {
      const dto = new CreateItemDto();
      dto.name = config.items[i].name;
      dto.rewardType = config.items[i].rewardType;
      dto.inventory = inventory;
      inventory.items.push(await this.itemsService.create(dto));
    }

    return await this.usersRepository.save(user);
  }

  // async remove(id: number) {
  //   const user = await this.usersRepository.findOneBy({
  //     id: id,
  //   });

  //   if (!user) {
  //     throw new NotFoundException(id);
  //   }

  //   await this.usersRepository.delete(user);
  //   return true;
  // }
}
