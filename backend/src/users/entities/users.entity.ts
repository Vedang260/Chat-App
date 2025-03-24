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

    @Column({ default: false })
    isOnline: boolean;

    @Column({ nullable: true })
    lastSeenAt: Date;

    @Column({ nullable: true })
    otp: string;

    @Column()
    otpExpirationTime: Date;
    
    @Column({ default: false })
    isVerified: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}