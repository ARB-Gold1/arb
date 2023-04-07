/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
       'roboto': ['Roboto', 'sans-serif']
    },
    colors: {
      primary: '#CEFF03',
      secondary: "#1D1D21",
      primaryText: "#FFF",
      secondaryText: "#000"
    },
    extend: {},
  },
  plugins: [],
}