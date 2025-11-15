/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#180D23',
        highlight: '#98BBEC',
        accent: '#FFA9F9',
        'text-primary': '#1a1a1a',
        'bg-primary': '#F9F9F9',
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '32px',
        'lg': '48px',
        'xl': '80px',
        'xxl': '120px',
      },
    },
  },
  plugins: [],
}
