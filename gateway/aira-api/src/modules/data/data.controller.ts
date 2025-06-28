// src/modules/data/data.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DataService } from './data.service';
import { ChatHistoryService } from '../aira-chat/history/history.service';

@Controller('data')
export class DataController {
  ChatHistoryService: any;

  constructor(
    private readonly dataService: DataService,
    private readonly chatHistoryService: ChatHistoryService 
  ) {}

  @Get('summary')
  async summary() {
    return this.dataService.getSummary();
  }

  @Get('analyze')
  async analyze() {
    return this.dataService.sendSummaryToAI();
  }

  @Post('chat')
  async chat(@Body() body: { userId: string; message: string }) {
    return this.dataService.sendChatToAI(body.userId, body.message);
  }

  @Get('history/:userId')
  async getHistory(@Param('userId') userId: string) {
    return this.chatHistoryService.getLastMessages(userId);
  }

  @Post('reset-chat')
  async reset(@Body('userId') userId: string) {
    await this.dataService.resetChat(userId);
    return { success: true };
  }

}
