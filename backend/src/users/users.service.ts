import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BpService } from 'src/bp/bp.service';
import { Bp } from 'src/bp/entities/bp.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
BpService;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const bp: Bp = new Bp();

    const user: User = new User();
    user.email = createUserDto.email;
    user.name = createUserDto.name;
    user.password = createUserDto.password;
    user.bp = bp;

    const rtn = await this.usersRepository.save(user);

    return rtn;
  }

  // findAll() {
  //   return this.usersRepository.find();
  // }

  findOne(id: number) {
    return this.usersRepository.find({
      relations: {
        bp: true,
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
    return this.usersRepository.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
