/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#5d57c9',
        neutral: '#EDEAF6',
        accent: '#FFF968',
        secondary: '#5947A2',
        error: '#FF6868',
        success: '#6ce0b0',
        softWhite: '#b7bac1',
        noSanc: '',
        lowSanc: '#d1b666',
        medSanc: '#d19366',
        highSanc: '#d16666',
      },
    },
  },
  plugins: [],
}
