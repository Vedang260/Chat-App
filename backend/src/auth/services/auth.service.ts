import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateUserDto } from "src/users/dtos/createUser.dto";
import { User } from "src/users/entities/users.entity";
import { UsersRepository } from "src/users/repositories/users.repository";
import { generateOTP } from "src/utils/generateOTP.util";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usersRepository: UsersRepository){}

    async register(createUserDto: CreateUserDto){
        try{
            // check for the existing user
            const existingUser = await this.usersRepository.findByEmail(createUserDto.email);
            if(existingUser){
                throw new ConflictException('User already exists');
            } 

            // Hash the password
            // hashing the password before storing
            const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            createUserDto.password = hashedPassword;

            // Generate OTP
            const otp = generateOTP();
            const otpExpirationTime = new Date();
            otpExpirationTime.setMinutes(otpExpirationTime.getMinutes() + 5); // OTP valid for 5 minutes
            
            // Create a new User
            const newUser = await this.usersRepository.createUser({
                ...createUserDto, 
                otp,
                otpExpirationTime
            });
            return {
                success: true,
                message: 'OTP is sent'
            }
        }catch(error){
            console.error('Error in registering a new User: ', error.message);
            return {
                success: false,
                message: error.message,
            }
        }
    }

    async verifyUser(email)
}