/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Legacy components, no longer used
    '!./src/components/sections/**',
    '!./src/components/common/**',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F2',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#16191D',
          soft: '#3A4048',
          muted: '#5E656E',
        },
        line: {
          DEFAULT: '#DCD9D0',
          strong: '#B9B5AA',
        },
        petrol: {
          DEFAULT: '#1F5C5A',
          dark: '#164443',
          soft: '#E4EDEB',
        },
        ochre: {
          DEFAULT: '#8A5A1F',
          soft: '#F3EBDD',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
