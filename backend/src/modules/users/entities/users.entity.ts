import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user' })
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

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
    hasStatus: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}