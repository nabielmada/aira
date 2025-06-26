// src/common/http-client.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProxyService {
  private readonly baseUrl: string;
  private readonly secret: string;

  constructor(
    private http: HttpService,
    private configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('EXTERNAL_API_BASE_URL') ?? (() => { throw new Error('Missing EXTERNAL_API_BASE_URL') })();
    this.secret = this.configService.get<string>('API_SECRET') ?? '';
  }

  async forwardRequest(path: string, token?: string) {
    const url = path.startsWith('http') ? path : `${this.baseUrl}${path}`;
    const headers: Record<string, string> = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(this.secret ? { Authorization: `Bearer ${this.secret}` } : {}),
      ...(this.secret ? { 'x-api-secret': this.secret } : {}),
    };

    try {
      const { data } = await this.http.axiosRef.get(url, { headers });
      return data;
    } catch (err) {
      console.error(`Error forwarding request to ${url}`, err.message);
      throw new Error(`Failed to fetch from ${url}`);
    }
  }
}
