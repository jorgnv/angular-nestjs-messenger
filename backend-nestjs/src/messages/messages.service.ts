import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private readonly messageRepository: Repository<Messages>,
  ) {}

  async getMessages(): Promise<Messages[]> {
    return this.messageRepository.find();
  }

  async createMessage(text: string): Promise<Messages> {
    const newMessage = this.messageRepository.create({ text });
    return this.messageRepository.save(newMessage);
  }
}
