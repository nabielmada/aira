import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { DataController } from './modules/data/data.controller';

import { ProxyService } from './common/proxy/http-client';
import { DataService } from './modules/data/data.service';
import { ChatHistoryService } from './modules/aira-chat/history/history.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [DataController],
  providers: [ProxyService, DataService, ChatHistoryService],
})
export class AppModule {}
