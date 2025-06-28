import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

@Injectable()
export class ChatHistoryService {
  private redis: Redis;

  constructor() {
    try {
      this.redis = new Redis();
    } catch {
      console.warn('Redis not connected, fallback to in-memory.');
    }
  }

  async getLastMessages(userId: string, limit = 10): Promise<ChatMessage[]> {
    if (!this.redis) return [];

    const raw = await this.redis.lrange(`chat:${userId}`, -limit, -1);
    return raw.map((item) => JSON.parse(item));
  }

  async saveMessage(userId: string, role: ChatMessage['role'], content: string) {
    if (!this.redis) return;

    const message: ChatMessage = { role, content };
    await this.redis.rpush(`chat:${userId}`, JSON.stringify(message));
    await this.redis.ltrim(`chat:${userId}`, -30, -1);
  }

  async resetHistory(userId: string) {
    if (!this.redis) return;
    await this.redis.del(`chat:${userId}`);
  }
}
