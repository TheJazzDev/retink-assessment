// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'realway': ['Raleway', 'sans-serif'],
      'moranga': ['Moranga', 'sans'],
    },
    extend: {
      screens: {
        sm: '480px',
      },
      colors: {
        'primary-purple-normal-active': '#EAE4FC',
        'primary-purple-light': '#F1EDFD',
        'primary-purple-normal': '#754DE8',
        'primary-purple-light-hover': '#EAE4FC',
        'retink-grey-0': '#F4F3F6',
        'retink-grey-05': '#4D4959',
        'retink-blue-grey': '#77737F',
        'retink-blue-grey-600': '#9893A3',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}