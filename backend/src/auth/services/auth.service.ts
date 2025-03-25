import { Injectable } from "@nestjs/common";
import { User } from "src/users/entities/users.entity";
import { UsersRepository } from "src/users/repositories/users.repository";
import { generateOTP } from "src/utils/generateOTP.util";

@Injectable()
export class AuthService {
    constructor(private readonly usersRepository: UsersRepository){}

    async register(user: Partial<User>){
        try{
            if(user){

            } 
            const {otp, otpExpirationTime} = generateOTP();
            const NewUser = await this.usersRepository.createUser({...user, otp, otpExpirationTime});

        }catch(error){

        }
    }
}