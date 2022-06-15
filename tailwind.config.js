/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        passion: ["Passion One", "cursive"],
        catamaran: ["Catamaran", "sans-serif"],
      },
      gridTemplateColumns: {
        '35/65': '35% 65%',
      }
    },
  },
  plugins: [],
}
