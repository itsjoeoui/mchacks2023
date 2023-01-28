import { Bp } from 'src/bp/entities/bp.entity';
import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  coin: number;

  @OneToOne(() => Bp, (bp) => bp.user)
  bp: Bp;
}
