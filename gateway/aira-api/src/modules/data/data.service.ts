// src/modules/data/data.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

import { ProxyService } from '../../common/proxy/http-client';
import { ChatHistoryService } from '../aira-chat/history/history.service';
import { detectIntent, getQuickResponse } from 'src/utils/intent.util';
import { formatMarkdownAnswers } from 'src/modules/helper/formatted-answers';

import { readFileSync } from 'fs';
import { join } from 'path';

import pLimit from 'p-limit';

const systemPrompt = readFileSync(join(__dirname, '../../../src/common/prompt/system.txt'), 'utf8');

@Injectable()
export class DataService {
  constructor(
    private proxy: ProxyService,
    private http: HttpService,
    private config: ConfigService,
    private chatHistoryService: ChatHistoryService 
  ) {}

  async getSummary() {
    const endpoints = [
      'https://dummyjson.com/recipes?limit=3',
      'https://dummyjson.com/carts?limit=3',
    ];
  
    const limit = pLimit(10);
  
    const tasks = endpoints.map((path) =>
      limit(async () => {
        const key = path.split('/').pop() || 'unknown';
        try {
          const data = await this.proxy.forwardRequest(path);
          return { [key]: data };
        } catch (e) {
          return { [key]: { error: true, message: e.message } };
        }
      })
    );
  
    const responses = await Promise.all(tasks);
    const result: Record<string, any> = Object.assign({}, ...responses);
  
    return result;
  }

  async sendSummaryToAI() {
    const summary = await this.getSummary();
    const aiUrl = this.config.get<string>('AI_ENGINE_URL') + '/ai/analyze';

    const response = await firstValueFrom(
      this.http.post(aiUrl, { 
        data: summary,
      })
    );

    return response.data;
  }

  async sendChatToAI(userId: string, userQuestion: string) {
    // const intent = detectIntent(userQuestion);
  
    // if (intent !== 'default') {
    //   const reply = getQuickResponse(intent);
    //   await this.chatHistoryService.saveMessage(userId, 'user', userQuestion);
    //   await this.chatHistoryService.saveMessage(userId, 'assistant', reply ?? '');
    //   return reply;
    // }
  
    const aiUrl = this.config.get<string>('AI_ENGINE_URL') + '/ai/chat';
  
    const chatHistory: { role: string; content: string }[] =
      await this.chatHistoryService.getLastMessages(userId, 10);
  
    chatHistory.push({ role: 'user', content: userQuestion });
  
    if (!chatHistory.some((m) => m.role === 'system')) {
      chatHistory.unshift({
        role: 'system',
        content: systemPrompt
      });
    }
  
    const context = await this.getSummary();
  
    const body = {
      messages: chatHistory,
      context,
    };
  
    const response = await firstValueFrom(this.http.post(aiUrl, body));
    const aiReply = response.data;
  
    await this.chatHistoryService.saveMessage(userId, 'user', userQuestion);
    await this.chatHistoryService.saveMessage(userId, 'assistant', aiReply);
  
    return aiReply;
  }

  async resetChat(userId: string) {
    await this.chatHistoryService.resetHistory(userId);
  }
}
