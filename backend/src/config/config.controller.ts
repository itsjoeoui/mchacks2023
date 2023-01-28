import { Controller, Get } from '@nestjs/common';
import { Type } from 'src/items/entities/item.entity';
import { Config } from './entities/config.entity';

@Controller('config')
export class ConfigController {
  @Get()
  get() {
    const config: Config = {
      maxExp: 100,
      items: [
        { name: '2$ Off', type: Type.Coupon },
        { name: 'Free Combo Upgrade', type: Type.Food },
        { name: '5$ Off', type: Type.Coupon },
        { name: 'Free Meal', type: Type.Food },
        { name: '10$ Off', type: Type.Coupon },
      ],
    };
    return config;
  }
}
