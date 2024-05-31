const flowbite = require('flowbite-react/tailwind');
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: { mainColor: '#38B6FF', mClr: '#38B6FF', sClr: '#FF3131' },
    },
  },
  plugins: [require('flowbite/plugin')],
};
