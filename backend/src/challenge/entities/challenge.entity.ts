import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  completed: boolean;
}
