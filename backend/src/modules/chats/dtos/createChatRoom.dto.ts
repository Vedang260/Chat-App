import { IsNotEmpty } from "class-validator";
import { User } from "src/modules/users/entities/users.entity";

export class CreateChatRoomDto{
    @IsNotEmpty()
    isGroup: boolean;

    groupName?: string;

    groupIcon?: string;

    description?: string;

    participants: User[];
}