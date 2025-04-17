import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { ChatRoomService } from "../services/chatRoom.service";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt_auth.guard";
import { CreateChatRoomDto } from "../dtos/createChatRoom.dto";

@Controller('chat-room')
@UseGuards(JwtAuthGuard)
export class ChatRoomController{
    constructor(private readonly chatRoomService: ChatRoomService){}

    @Post()
    async createNewChatRoom(@Body() createChatRoomDto: CreateChatRoomDto, @Req() req: Request){
        return await this.chatRoomService.createChatRoom(createChatRoomDto, req['userId']);
    }
}