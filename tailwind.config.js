/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mukta: "Mukta",
        museomoderno: "MuseoModerno",
        "merienda-one": "'Merienda One'",
        "song-myung": "'Song Myung'",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
