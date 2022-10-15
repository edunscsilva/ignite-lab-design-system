/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    
    colors:{

      transparent: 'transparent',
      black: '#000',
      white: '#FFF',

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-700': '#7C7C8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',
      
      
      'orange-200': '#ff7a41',
      'orange-100': 'ff9263',
    },
    
    extend: {},
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
  },
  plugins: [],
}
