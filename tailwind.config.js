/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary:{
          100:"#048ba8",
          200:"#63bff3",
          300:"#445cb4",
          400:"#44bdb4",
        },
        secundary:{
          100:"#16db93",
          200:"#16dbbb",
          300:"#97db93",
          400:"#16ff69",
        },
        tersary:{
          100:"#45503b",
          200:"#455050",
          300:"#4f5050",
          400:"#3e4550",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
