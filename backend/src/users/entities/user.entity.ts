import { Bp } from 'src/bp/entities/bp.entity';
import {
  Column,
  Entity,
  JoinColumn,
  // JoinColumn,
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
}
