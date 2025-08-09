/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#00f0ff',
          pink: '#ff00c8',
        },
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          surface: '#111827',
        },
      },
      boxShadow: {
        neon: '0 0 15px #00f0ff',
        pink: '0 0 15px #ff00c8',
      },
    },
  },
  plugins: [],
}
