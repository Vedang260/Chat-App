import { Injectable } from "@nestjs/common";
import { ChatRoomRepository } from "../repositories/chatRoom.repository";
import { CreateChatRoomDto } from "../dtos/createChatRoom.dto";

@Injectable()
export class ChatRoomService{
    constructor(private readonly chatRoomRepository: ChatRoomRepository){}

    async createChatRoom(chatRoomDto: CreateChatRoomDto, userId: string): Promise<{ success: boolean; message: string}>{
        try{
            chatRoomDto.participants.push();
            const newChatRoom = await this.chatRoomRepository.createChatRoom(chatRoomDto);
            return{
                success: true,
                message: 'New Chat Room is created'
            }
        }catch(error){
            console.error('Error in creating a new Chat Room: ', error.message);
            return {
                success: false,
                message: 'Failed to create a new Chat Room'
            }
        }
    }
}