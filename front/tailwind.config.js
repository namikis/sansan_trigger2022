/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme:{
    extend: {
        colors:{
            'brown-llight':'#D6BB9B',
            'brown-light':'#B18857',
            'brown-base':'#7C694D',
            'brown-base-shadow':'#5e4c30',
            'brown-dark':'#4F2F00',
        },
    },
  },
  plugins: [],
}
