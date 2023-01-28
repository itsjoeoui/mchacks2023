import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  exp: number;
}
