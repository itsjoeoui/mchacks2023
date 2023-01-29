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
BpService;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private challengeService: ChallengeService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const bp = new Bp();
    const inventory = new Inventory();
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
    return await this.usersRepository.find();
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
