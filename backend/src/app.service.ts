import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { ItemsService } from './items/items.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { CreateChallengeDto } from './challenge/dto/create-challenge.dto';
import { ChallengeService } from './challenge/challenge.service';
import { levels } from './bp/bp.controller';
import { CreateItemDto } from './items/dto/create-item.dto';

const USER: CreateUserDto = {
  name: 'JYU',
  password: 'passwd',
  email: 'someemail',
};

const CHALLENGE: Partial<CreateChallengeDto>[] = [
  {
    name: 'Sushi Sama',
    description: 'Buy 1 get 1 free',
    exp: 100,
  },
  {
    name: 'Basha',
    description: 'Spend $15, earn 100 Radish coins',
    exp: 233,
  },
  {
    name: 'Thai Express',
    description: 'Free item after spending 10$',
    exp: 302,
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
      const user = await this.usersService.create(USER);
      CHALLENGE.map((c) => {
        c.user = user;
        this.challengeService.create(c as CreateChallengeDto);
      });
      FILLED = true;
      return true;
    }
    return false;
  }

  async order(userId: number, orderId: number): Promise<boolean> {
    const user = await this.usersService.findOne(userId);

    const curLevel = Math.floor(user.bp.exp / 1000);
    user.bp.exp += 100;
    const newLevel = Math.floor(user.bp.exp / 1000);

    for (let i = curLevel; i < newLevel; i++) {
      const dto = new CreateItemDto();
      dto.name = levels[i].name;
      dto.rewardType = levels[i].rewardType;
      dto.inventory = user.inventory;
      await this.itemsService.create(dto);
    }
    return true;
  }
}
