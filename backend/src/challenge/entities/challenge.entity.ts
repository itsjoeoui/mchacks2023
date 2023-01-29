import { User } from '@shared/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  exp: number;

  @Column()
  completed: boolean;

  @Column()
  menuId: number;

  @ManyToOne(() => User, (user) => user.challenges)
  user: User;
}
