import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChatRoom } from "./chatRoom.entity";
import { User } from "src/modules/users/entities/users.entity";
import { MessageStatus } from "./messageStatus.entity";
import { Reaction } from "./reaction.entity";

@Entity({ name: 'message'})
export class Message {
  @PrimaryGeneratedColumn()
  messageId: number;

  @ManyToOne(() => ChatRoom, chatRoom => chatRoom.messages)
  chatRoom: ChatRoom;

  @ManyToOne(() => User, user => user.sentMessages)
  sender: User;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true })
  type: 'text' | 'image' | 'video' | 'audio' | 'file' | 'sticker';

  @Column({ nullable: true })
  mediaUrl: string;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ default: false })
  isEdited: boolean;

  @OneToMany(() => MessageStatus, status => status.message)
  statusList: MessageStatus[];

  @OneToMany(() => Reaction, reaction => reaction.message)
  reactions: Reaction[];

  @CreateDateColumn({ type: 'timestamp' })
  sentAt: Date;
}
