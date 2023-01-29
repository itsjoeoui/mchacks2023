import { Inventory } from '@shared/inventory/entities/inventory.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum RewardType {
  Coupon,
  Food,
  Coin,
}
@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  rewardType: RewardType;

  @ManyToOne(() => Inventory, (inventory) => inventory.items)
  inventory: Inventory;
}
