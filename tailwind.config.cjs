/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "custom": {
          "bodyBg": "#F1F1F6",
          'cardBlack': { DEFAULT: '#2A2E35', 50: '#7E8899', 100: '#737D90', 200: '#606979', 300: '#4E5663', 400: '#3C424C', 500: '#2A2E35', 600: '#111316', 700: '#000000', 800: '#000000', 900: '#000000' },
          "gfont":"#757575",
        }
      }
    },
  },
  plugins: [],
}
