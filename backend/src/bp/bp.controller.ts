import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { RewardType } from '@shared/items/entities/item.entity';
import { BpService } from './bp.service';
import { UpdateBpDto } from './dto/update-bp.dto';

export const levels = [
  { name: '$5 dollars off Starbucks Drink', rewardType: RewardType.Coupon },
  { name: '1000 coins', rewardType: RewardType.Coin },
  { name: 'Free Large Fries', rewardType: RewardType.Food },
  { name: 'Free Burger', rewardType: RewardType.Food },
  { name: '50% off combo meal', rewardType: RewardType.Coupon },
];

@Controller('bp')
export class BpController {
  constructor(private readonly bpService: BpService) {}

  // @Get()
  // async findAll() {
  //   return await this.bpService.findAll();
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bpService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBpDto: UpdateBpDto) {
    return await this.bpService.update(+id, updateBpDto);
  }

  @Get('levels')
  async levels() {
    return levels;
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bpService.remove(+id);
  // }
}
