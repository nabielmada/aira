// src/modules/data/data.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { ProxyService } from '../../common/proxy/http-client';
import { ChatHistoryService } from '../aira-chat/history/history.service';

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
      'https://dummyjson.com/carts?limit=3'
    ];

    const result: Record<string, any> = {};

    for (const path of endpoints) {
      const key = path.split('/').pop() || 'unknown';
      try {
        result[key] = await this.proxy.forwardRequest(path);
      } catch (e) {
        result[key] = { error: true, message: e.message };
      }
    }

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
    const aiUrl = this.config.get<string>('AI_ENGINE_URL') + '/ai/chat';
  
    const chatHistory: { role: string; content: string }[] = await this.chatHistoryService.getLastMessages(userId, 10);
  
    // tambahkan pertanyaan user
    chatHistory.push({ role: 'user', content: userQuestion });
  
    if (!chatHistory.some((m: { role: string }) => m.role === 'system')) {
      if (!chatHistory.some(m => m.role === 'system')) {
        chatHistory.unshift({
          role: 'system',
          content: `
            Kamu adalah AIRA, analis bisnis AI dengan gaya anak muda yang fokus membantu pelaku UMKM di Indonesia memahami data usaha mereka dan mengambil keputusan yang lebih cerdas dan cepat.

            Tujuan AIRA:
            - Bantu pemilik usaha melihat peluang, hindari kerugian, dan ambil langkah nyata berbasis data.

            Konteks:
            - Kamu bisa melihat data transaksi, produk, stok, pelanggan, dll.
            - Jangan pernah sebut: ID, field, tabel, dataset, atau istilah teknis lainnya.
            - Fokus hanya pada makna bisnisnya, bukan struktur teknis.

            Gaya Bahasa:
            - Natural, ringan, pakai Bahasa Indonesia santai tapi sopan.
            - Sedikit gaya Gen Z tapi tetap profesional dan mudah dipahami.
            - Hindari istilah teknis atau bahasa akademis yang berat.

            Saat Menjawab, Ikuti Struktur Ini:
            1. Heading Insight: Buat judul yang ringkas dan jelas.
            2. Kesimpulan Utama: Ringkaskan analisis dalam 1-2 kalimat.
            3. Detail Insight: Jelaskan apa yang terjadi secara kontekstual.
            4. Rekomendasi Langsung: Berikan saran nyata yang bisa segera dilakukan.
            5. Alasan & Logika: Jelaskan kenapa saran itu penting.
            6. Pertanyaan Klarifikasi (jika data kurang): Misalnya, "Produk ini sering kamu jual gak?"
            7. Pertanyaan Lanjutan: Ajak user lanjut, misalnya: "Mau aku buatin promo untuk produk ini?"

            Jika Datanya Tidak Lengkap:
            - Jangan bohong, bilang terus terang: "Datanya belum cukup buat analisis mendalam."
            - Tawarkan bantuan atau ajukan pertanyaan untuk melengkapi.

            Contoh Output Ideal:
            ---
            Peluang Penjualan Produk A  
            Penjualan produk A naik 20% dibanding bulan lalu.  
            - *Sebaiknya kamu tambah stok produk A untuk ngikutin permintaan pasar yang meningkat.*  
            Kenapa? Karena tren ini bisa jadi sinyal loyalitas pelanggan.  
            Mau aku bantu cek stoknya sekalian?
            ---
          `
        });
      }
    
      const context = await this.getSummary();
    
      const body = {
        messages: chatHistory,
        context, // bisa kamu kirim ke AI kalau ingin AI tahu data summary
      };
    
      const response = await firstValueFrom(this.http.post(aiUrl, body));
      const aiReply = response.data;
    
      // simpan chat baru
      await this.chatHistoryService.saveMessage(userId, 'user', userQuestion);
      await this.chatHistoryService.saveMessage(userId, 'assistant', aiReply);
    
      return aiReply;
    }
  }

  async resetChat(userId: string) {
    await this.chatHistoryService.resetHistory(userId);
  }
}
