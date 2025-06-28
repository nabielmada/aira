import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AiService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(private config: ConfigService) {
    this.apiKey = this.config.get<string>('GROQ_API_KEY') ?? (() => { throw new Error('Missing GROQ_API_KEY') })();
    this.apiUrl = this.config.get<string>('GROQ_API_URL') ?? (() => { throw new Error('Missing GROQ_API_URL') })();
  }

  async chatWithGroq(messages: { role: string; content: string }[]) {
    const body = {
      model: 'llama-3.3-70b-versatile',
      messages,
      temperature: 0.2,
    };
    try {
      const { data } = await axios.post(this.apiUrl, body, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      return data.choices[0].message.content;
    } catch (error) {
      if (error.response?.status === 429) {
        const retryAfter = error.response?.headers['retry-after'];
        const remainingQuota = error.response?.data?.remainingQuota;
    
        let message = 'Maaf, AIRA lagi kehabisan quota token untuk hari ini.';
        if (retryAfter) {
          message += ` Coba lagi setelah ${retryAfter} detik.`;
        }
        if (remainingQuota !== undefined) {
          message += ` Sisa quota token: ${remainingQuota}.`;
        }
        return message;
      }
  
      console.error('AIRA Error:', error.message || error);
      throw new Error('Gagal terhubung ke AI Engine. Silakan coba lagi.');
    }

  }
}
