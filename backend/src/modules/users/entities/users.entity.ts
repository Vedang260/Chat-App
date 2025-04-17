import { ChatRoom } from "src/modules/chats/entities/chatRoom.entity";
import { Message } from "src/modules/chats/entities/messages.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user' })
export class User{
    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column()
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    profilePhoto: string;

    @Column({ nullable: true })
    about: string;

    @Column({ default: false })
    isOnline: boolean;

    @Column({ type: 'timestamp', nullable: true })
    lastSeen: Date;

    @Column({ default: false })
    isPrivate: boolean;

    @Column({ default: false })
    hasStatus: boolean;

    @ManyToMany(() => ChatRoom, chatRoom => chatRoom.participants)
    chatRooms: ChatRoom[];

    @OneToMany(() => Message, message => message.sender)
    sentMessages: Message[];
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}