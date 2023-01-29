import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from '../../items/entities/item.entity';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Item, (item) => item.inventory)
  items: Item[];
}
