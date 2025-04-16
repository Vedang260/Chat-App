import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./messages.entity";
import { User } from "src/modules/users/entities/users.entity";

@Entity({ name: 'message_status' })
export class MessageStatus {
  @PrimaryGeneratedColumn()
  messageStatusId: number;

  @ManyToOne(() => Message, message => message.statusList)
  message: Message;

  @ManyToOne(() => User)
  user: User;

  @Column({ type: 'enum', enum: ['sent', 'delivered', 'read'], default: 'sent' })
  status: 'sent' | 'delivered' | 'read';

  @CreateDateColumn({ type: 'timestamp'})
  updatedAt: Date;
}
