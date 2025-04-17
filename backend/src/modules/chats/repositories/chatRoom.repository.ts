import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChatRoom } from "../entities/chatRoom.entity";
import { CreateChatRoomDto } from "../dtos/createChatRoom.dto";

@Injectable()
export class ChatRoomRepository{
    constructor(
        @InjectRepository(ChatRoom)
        private readonly chatRoomRepository: Repository<ChatRoom>,
    ) {} 

    async createChatRoom(createChatRoomDto: CreateChatRoomDto){
        try{
            const newChatRoom = this.chatRoomRepository.create(createChatRoomDto);
            return this.chatRoomRepository.save(newChatRoom);
        }catch(error){
            console.error('Error in creating a new Chat Room: ', error.message);
            return new InternalServerErrorException('Error in creating a Chat Room');
        }
    }
}