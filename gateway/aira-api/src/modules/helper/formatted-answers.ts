export function formatMarkdownAnswers(content: string): string {
    // 1. Ubah literal \n menjadi newline asli
    content = content.replace(/\\n/g, '\n');
  
    // 2. Tambah \n setelah heading agar tidak nempel ke isi
    content = content.replace(/(#{1,6} .+?)(?=\S)/g, '$1\n');
  
    // 3. Pisah bullet yang nempel
    content = content.replace(/([^\n])(\s)([*-]\s)/g, '$1\n$3');
  
    // 4. Auto newline antar bullet point
    content = content.replace(/([*-] .+?)(?=[*-] )/g, '$1\n');
  
    // 5. Auto markdown numbered list: "1. Item" jadi baris baru
    content = content.replace(/([^\n])(\s*)(\d+\.\s)/g, '$1\n$3');
  
    // 6. Format angka Rp → local currency Indonesia
    content = content.replace(/Rp\s?([\d.,]+)/g, (match, number) => {
      const clean = number.replace(/[^0-9]/g, '');
      const float = parseFloat(clean) / 100;
      return `Rp ${float.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });
  
    // 7. Bold otomatis untuk total harga / diskon
    content = content.replace(/(Total (harga|diskon):\s*)(Rp\s[\d.,]+)/gi, (_, label, value) => {
      return `**${label}${value}**`;
    });
  
    // 8. Heading emoji otomatis
    content = content.replace(/^### (Promo|Promosi|Diskon)/gim, '### 🎁 $1');
    content = content.replace(/^### Keranjang/gim, '### 🛒 Keranjang');
    content = content.replace(/^### Produk( Lainnya)?/gim, '### 📦 Produk$1');
    content = content.replace(/^### Analisis/gim, '### 📊 Analisis');
    content = content.replace(/^### Saran/gim, '### 💡 Saran');
  
    // 9. Table of Contents generator
    const headings: string[] = [];
    const lines = content.split('\n').map(line => {
      const match = /^(##{1,2}) (.+)/.exec(line);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const slug = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
        headings.push(`${'  '.repeat(level - 2)}- [${text}](#${slug})`);
      }
      return line;
    });
  
    if (headings.length > 0) {
      const toc = ['## 📚 Daftar Isi', '', ...headings, ''].join('\n');
      content = `${toc}\n${lines.join('\n')}`;
    }
  
    // 10. Rapikan blockquote (jika ada)
    content = content.replace(/^> ?(.*)/gm, '> $1');
  
    // 11. Normalisasi line break berlebih
    content = content
      .split('\n')
      .map(line => line.trimEnd())
      .filter((line, i, arr) => !(line === '' && arr[i - 1] === ''))
      .join('\n');
  
    return content.trim();
  }
  