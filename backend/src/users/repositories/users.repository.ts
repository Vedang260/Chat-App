import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { User } from "../entities/users.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dtos/createUser.dto";

@Injectable()
export class UsersRepository extends Repository<User>{
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        try{
            const user = this.create(createUserDto);
            return await this.save(user);
        }catch(error){
            console.error("Error in creating a new User: ", error.message);
            throw new InternalServerErrorException('Error in creating a new User');
        }
    }
}