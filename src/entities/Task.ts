import { Field, ObjectType, Int } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from "typeorm";

@Entity()
@ObjectType()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field(() => String)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => String)
  updatedAt: Date;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => Boolean)
  isCompleted: boolean;
}
