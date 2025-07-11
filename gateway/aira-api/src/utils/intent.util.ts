export type Intent = 'gratitude' | 'confirmation' | 'followup' | 'default';

export function detectIntent(message: string): Intent {
  const normalized = message.toLowerCase().trim();

  if (['terima kasih', 'terimakasih', 'makasih', 'thank you'].includes(normalized)) return 'gratitude';
  if (['ya', 'oke', 'sip', 'lanjut'].includes(normalized)) return 'followup';
  if (['mau', 'boleh', 'yuk'].includes(normalized)) return 'confirmation';

  return 'default';
}

export function getQuickResponse(intent: Intent): string | null {
  switch (intent) {
    case 'gratitude':
      return pickRandom([
        'Sama-sama! Kapan pun kamu butuh bantuan, tinggal bilang aja ya 🙌',
        'Senang bisa bantu! Kalau ada hal lain, tinggal tanya aja 😄',
        'Terima kasih kembali! Aku siap bantuin kamu lagi nanti 👍'
      ]);
    case 'confirmation':
      return pickRandom([
        'Oke, langsung kita jalanin ya!',
        'Siap! Aku bantu prosesin promonya 🚀',
        'Mantap, langsung kita mulai 💪'
      ]);
    case 'followup':
      return pickRandom([
        'Oke, kita lanjut ya!',
        'Siap, aku tunggu pertanyaan lanjutannya 😄',
        'Let’s go! Kamu mau bahas apa selanjutnya?'
      ]);
    default:
      return null;
  }
}

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}
