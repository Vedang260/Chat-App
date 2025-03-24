import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user'})
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Column({ unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    isOnline: boolean;

    @Column()
    lastSeenAt: Date;

    @Column({ nullable: true })
    otp: string;

    @Column()
    isVerified: boolean;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}