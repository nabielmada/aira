import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AiService } from './modules/aira-ai/ai.service';
import { AiController } from './modules/aira-ai/ai.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AiController],
  providers: [AiService],
})
export class AppModule {}
