/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme:{
    extend: {
        colors:{
            'brown-light':'#B18857',
            'brown-base':'#7C694D',
            'brown-dark':'#4F2F00',
            'brown-llight':'#D6BB9B',
        },
    },
  },
  plugins: [],
}
