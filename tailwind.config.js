/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize:{
      h1: ['40px',{fontWeight:'bold'}],
      h2: ['32',{fontWeight:'bold'}],
      h3: ['30px',{fontWeight:'bold'}],
      b1: ['40px',{fontWeight:'bold'}],
      b2: ['40px',{fontWeight:'normal'}],
      b3: ['32px',{fontWeight:'bold'}],
      b4: ['32px',{fontWeight:'normal'}],
      b5: ['24px',{fontWeight:'bold'}],
      b6: ['24px',{fontWeight:'normal'}],
      b7: ['18px',{fontWeight:'bold'}],
      b8: ['18px',{fontWeight:'normal'}],
      b9: ['18px',{fontWeight:'normal'}],
      b10: ['14px',{fontWeight:'bold'}],
      b11: ['14px',{fontWeight:'normal'}],
      b12: ['12px',{fontWeight:'bold'}],
      b13: ['12px',{fontWeight:'normal'}],
      b14: ['10px',{fontWeight:'bold'}],
      b15: ['10px',{fontWeight:'normal'}],
      b16: ['9px',{fontWeight:'normal'}],
      b17: ['10px',{fontWeight:'bold'}], 
    },
    fontFamily:{
      MsMadi: ['MsMadi'],
      Lexend: ['Lexend']
    },
    extend: {
      colors: {
        brown: "#9D5C0D",
        orange: "#E5890A",
        orange100: "#B86E09",
        beige: "#F7D08A",
        beige100: "#FFEFD3",
        white: "#FAFAFA",
        grey: "#E3E3E3",
        grey100: "#4F4F4F",
        grey200: "#828282",
        grey300: "#BDBDBD",
        grey400: "#E0E0E0",
        black: "#333333",
      },
      screens: {
        'xs': '540px',
        '1.5xl': '1400px',
        '3xl': '1774px',
        
      }
    },
  },
  plugins: [],
};