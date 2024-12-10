/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          muted: 'var(--muted)',
        },
      },
    },
    plugins: [],
  }