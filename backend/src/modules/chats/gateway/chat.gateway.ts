import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
    MessageBody,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  import { ChatService } from './chat.service';
  
  @WebSocketGateway({ cors: true })
  export class ChatGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
  {
    @WebSocketServer()
    server: Server;
  
    constructor(private readonly chatService: ChatService) {}
  
    afterInit() {
      console.log('Socket server initialized');
    }
  
    handleConnection(client: Socket) {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
    }
  
    @SubscribeMessage('joinRoom')
    handleJoinRoom(@MessageBody() data: { roomId: string; userId: string }, client: Socket) {
      client.join(data.roomId);
      this.server.to(data.roomId).emit('userJoined', data.userId);
    }
  
    @SubscribeMessage('sendMessage')
    async handleSendMessage(
      @MessageBody()
      data: {
        content: string;
        senderId: string;
        chatRoomId: string;
        type?: string;
      },
    ) {
      const savedMessage = await this.chatService.saveMessage(data);
      this.server.to(data.chatRoomId).emit('newMessage', savedMessage);
    }
  }
  