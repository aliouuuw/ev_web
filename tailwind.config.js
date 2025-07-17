/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'macafricansgicomforest-green': '#435933',
        'macafricansgicomwhite': '#ffffff',
      },
      fontFamily: {
        'macafricansgi-com-lato-bold': ['Lato', 'sans-serif'],
        'macafricansgi-com-lato-light': ['Lato', 'sans-serif'],
        'macafricansgi-com-lato-regular': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
