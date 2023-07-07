/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mukta", "sans-serif"],
        museomoderno: "MuseoModerno",
        "merienda-one": "'Merienda One'",
        "song-myung": "'Song Myung'",
      },
      colors: {
        body: {
          light: "#E4E9F7",
          dark: "#0E1422",
        },
        primary: "#2079FF"
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
