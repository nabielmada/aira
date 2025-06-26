export function extractKeywords(text: string): string[] {
    const stopWords = ['yang', 'dan', 'sudah', 'untuk', 'dengan', 'tapi', 'karena'];
    const words = text.toLowerCase().match(/\b\w{4,}\b/g) || [];
    const freq: Record<string, number> = {};
  
    words.forEach((word) => {
      if (!stopWords.includes(word)) {
        freq[word] = (freq[word] || 0) + 1;
      }
    });
  
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([w]) => w);
  }
  