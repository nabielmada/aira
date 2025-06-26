// src/modules/data/data.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {

  constructor(private readonly dataService: DataService) {}

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

  @Post('reset-chat')
  async reset(@Body('userId') userId: string) {
    await this.dataService.resetChat(userId);
    return { success: true };
  }

}
