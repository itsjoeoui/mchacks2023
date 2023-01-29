import { Challenge } from '@shared/challenge/entities/challenge.entity';
import { Bp } from 'src/bp/entities/bp.entity';
import { Inventory } from '@shared/inventory/entities/inventory.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  coin: number;

  @OneToOne(() => Bp, {
    cascade: true,
  })
  @JoinColumn()
  bp: Bp;

  @OneToOne(() => Inventory, {
    cascade: true,
  })
  @JoinColumn()
  inventory: Inventory;

  @OneToMany(() => Challenge, (challenge) => challenge.user)
  challenges: Challenge[];
}
