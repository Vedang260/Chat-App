import { UsersRepository } from "../repositories/users.repository"

@Injectable()
export const UserService {
    constructor (private readonly usersRepository: UsersRepository){}

    
}