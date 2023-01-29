import { Inventory } from '@shared/inventory/entities/inventory.entity';
import { RewardType } from '../entities/item.entity';
export class CreateItemDto {
  name: string;
  rewardType: RewardType;
  inventory: Inventory;
}
