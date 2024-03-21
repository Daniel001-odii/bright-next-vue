/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bna_green: "#31B31C",
        bna_green_dark: "#00491e",

        bna_blue: "#1E77DD",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

