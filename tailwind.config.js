/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff88',
      },
      fontFamily: {
        'switzer': ['Switzer', 'system-ui', 'sans-serif'],
        'mona': ['Mona Sans', 'sans-serif'],
        'sans': ['Switzer', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
