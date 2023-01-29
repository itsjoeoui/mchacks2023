import { Controller, Get } from '@nestjs/common';
import { RewardType } from 'src/items/entities/item.entity';
import { Config } from './entities/config.entity';

@Controller('config')
export class ConfigController {
  @Get()
  get() {
    const config: Config = {
      maxExp: 10000,
      items: [
        { name: '2$ Off', rewardType: RewardType.Coupon, inventory: null },
        { name: 'Free Combo Upgrade', rewardType: RewardType.Food },
        { name: '5$ Off', rewardType: RewardType.Coupon },
        { name: 'Free Drink', rewardType: RewardType.Food },
        { name: '100 Coins', rewardType: RewardType.Coin },
        { name: '2$ Off', rewardType: RewardType.Coupon, inventory: null },
        { name: 'Free Meal', rewardType: RewardType.Food },
        { name: '5$ Off', rewardType: RewardType.Coupon },
        { name: 'Free Meal', rewardType: RewardType.Food },
        { name: '100 Coins', rewardType: RewardType.Coin },
        { name: '6$ Off', rewardType: RewardType.Coupon, inventory: null },
        { name: 'Free Combo Upgrade', rewardType: RewardType.Food },
        { name: '5$ Off', rewardType: RewardType.Coupon },
        { name: 'Free Meal', rewardType: RewardType.Food },
        { name: '100 Coins', rewardType: RewardType.Coin },
        { name: '8$ Off', rewardType: RewardType.Coupon, inventory: null },
        { name: 'Free Combo Upgrade', rewardType: RewardType.Food },
        { name: '10$ Off', rewardType: RewardType.Coupon },
        { name: 'Free Meal', rewardType: RewardType.Food },
        { name: '100 Coins', rewardType: RewardType.Coin },
      ],
    };
    return config;
  }
}
