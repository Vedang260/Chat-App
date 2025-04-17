import { User } from "src/modules/users/entities/users.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./messages.entity";

@Entity({ name: 'chat_room' })
export class ChatRoom{
    @PrimaryGeneratedColumn('uuid')
    chatRoomId: string;

    @Column({ default: false })
    isGroup: boolean;
    
    @Column({ nullable: true })
    groupName?: string;

    @Column({ nullable: true })
    groupIcon?: string;

    @Column({ default: false })
    description?: string;

    @ManyToOne(() => User, { nullable: true })
    createdBy: User;

    @ManyToMany(() => User, user => user.chatRooms)
    @JoinColumn({ name: 'userId'})
    participants: User[];

    @OneToMany(() => Message, message => message.chatRoom)
    messages: Message[];

    @OneToOne(() => Message, { nullable: true })
    @JoinColumn()
    lastMessage: Message;

    @CreateDateColumn()
    createdAt: Date;
}