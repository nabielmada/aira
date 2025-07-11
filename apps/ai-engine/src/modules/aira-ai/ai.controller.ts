import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService) {}

    @Post('analyze')
    async analyze(@Body('data') data: Record<string, any>): Promise<any> {
        const prompt = this.createPrompt(data);
        return this.aiService.chatWithAira([{ role: 'user', content: prompt }]);
    }

    @Post('chat')
    async chat(@Body() body: { messages: { role: string; content: string }[]; context?: any }) {
        const messages = [...body.messages];;

        // bisa tambahkan konteks ke dalam prompt jika perlu
        if (body.context) {
            messages.push({
            role: 'user',
            content: `Berikut konteks tambahan untuk kamu pahami:\n${JSON.stringify(body.context, null, 2)}`
            });
        }

        return this.aiService.chatWithAira(messages);
    }

    private createPrompt(data: Record<string, any>): string {
        return `Berikan insight dari data berikut:\n\n${JSON.stringify(data, null, 2)}`;
    }
}
