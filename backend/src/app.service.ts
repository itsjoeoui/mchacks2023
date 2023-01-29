import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { ItemsService } from './items/items.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { CreateChallengeDto } from './challenge/dto/create-challenge.dto';
import { ChallengeService } from './challenge/challenge.service';
import { levels } from './bp/bp.controller';
import { CreateItemDto } from './items/dto/create-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Repository } from 'typeorm';

const USER: CreateUserDto = {
  name: 'JYU',
  password: 'passwd',
  email: 'someemail',
};

export const CHALLENGE: Partial<CreateChallengeDto>[] = [
  {
    name: 'Sushi Sama',
    description: 'Order a California Roll',
    exp: 100,
    menuId: 1,
  },
  {
    name: 'Basha',
    description: 'Order a Shawarma Beef Poutine',
    exp: 233,
    menuId: 2,
  },
  {
    name: 'Thai Express',
    description: 'Order a General Thai Chicken with Cauliflower Rice',
    exp: 2500,
    menuId: 3,
  },
];

let FILLED = false;

@Injectable()
export class AppService {
  constructor(
    private usersService: UsersService,
    private challengeService: ChallengeService,
    private itemsService: ItemsService,
  ) {}
  async fillDb(): Promise<boolean> {
    if (!FILLED) {
      await this.usersService.create(USER);
      FILLED = true;
      return true;
    }
    return false;
  }
}
