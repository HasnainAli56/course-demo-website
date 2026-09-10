/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#034D54',
          'teal-dark': '#01373C',
          'teal-light': '#006D77',
          'teal-subtle': '#0F595E',
          navy: '#0F2830',
          peach: '#FDEEE3',
          'peach-light': '#FFF7F2',
          'peach-dark': '#F9DAC3',
          mint: '#E6F4F3',
          'mint-border': '#C5E7E5',
          slate: '#1B363F',
          muted: '#5A6E75',
          card: '#FAFCFC'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        script: ['Caveat', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'poster': '0 12px 36px -8px rgba(3, 77, 84, 0.12)',
        'poster-lg': '0 20px 48px -10px rgba(3, 77, 84, 0.18)',
        'card': '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
