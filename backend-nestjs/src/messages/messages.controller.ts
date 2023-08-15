import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  getMessages() {
    return this.messagesService.getMessages();
  }

  @Post()
  createMessage(@Body() body: { text: string }) {
    return this.messagesService.createMessage(body.text);
  }
}
