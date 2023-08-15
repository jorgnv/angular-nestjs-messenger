import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages: string[] = [];

  getMessages(): string[] {
    return this.messages;
  }

  createMessage(text: string): void {
    console.log({ text });
    this.messages.push(text);
  }
}
