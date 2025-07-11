// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              maxWidth: 'none',
              color: 'inherit',
              h1: { color: 'inherit' },
              h2: { color: 'inherit' },
              h3: { color: 'inherit' },
              h4: { color: 'inherit' },
              p: { color: 'inherit' },
              strong: { color: 'inherit' },
              code: { color: 'inherit' },
              pre: { color: 'inherit' },
              blockquote: { color: 'inherit' },
              'ul > li': { color: 'inherit' },
              'ol > li': { color: 'inherit' },
              table: { color: 'inherit' },
              thead: { color: 'inherit' },
              'thead th': { color: 'inherit' },
              'tbody td': { color: 'inherit' },
            },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }