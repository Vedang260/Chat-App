import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { User } from "../entities/users.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dtos/createUser.dto";

@Injectable()
export class UsersRepository extends Repository<User>{

    async findByEmail(email: string): Promise<User | null>{
        try{
            return await this.findOne({ where: {email}});
        }catch(error){
            console.error("Error in finding a user by email: ", error.message);
            throw new InternalServerErrorException('Error in finding a user by mail');
        }
    }

    async createUser(user: Partial<User>): Promise<User> {
        try{
            const newUser = this.create(user);
            return await this.save(newUser);
        }catch(error){
            console.error("Error in creating a new User: ", error.message);
            throw new InternalServerErrorException('Error in creating a new User');
        }
    }
}