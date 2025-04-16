import { User } from "src/modules/users/entities/users.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./messages.entity";

@Entity({ name: 'reaction' })
export class Reaction {
  @PrimaryGeneratedColumn()
  reactionId: number;

  @ManyToOne(() => Message, message => message.reactions)
  message: Message;

  @ManyToOne(() => User)
  user: User;

  @Column()
  emoji: string;

  @CreateDateColumn()
  reactedAt: Date;
}
