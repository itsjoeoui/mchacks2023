import { User } from 'src/users/entities/user.entity';
import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Bp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exp: number;

  @OneToOne(() => User, (user) => user.bp)
  user: User;
}
