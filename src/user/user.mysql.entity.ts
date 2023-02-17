import {
  Entity,
  Column,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: null })
  name: string;
}
