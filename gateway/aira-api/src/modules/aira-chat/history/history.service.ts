import { Injectable } from '@nestjs/common';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

@Injectable()
export class ChatHistoryService {
  private history: Map<string, ChatMessage[]> = new Map();

  async getLastMessages(userId: string, limit = 10): Promise<ChatMessage[]> {
    const allMessages = this.history.get(userId) || [];
    return allMessages.slice(-limit);
  }

  async saveMessage(userId: string, role: ChatMessage['role'], content: string) {
    const current = this.history.get(userId) || [];
    current.push({ role, content });
    this.history.set(userId, current);
  }

  async resetHistory(userId: string) {
    this.history.delete(userId);
  }
}
