/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui"],
      },
      colors: {
        primary: "#FEDA15",
        tertiary: "#DE0001",
        headline: "#27231F",
        grayText: "#6F6F6F",
      },
    },
  },
  plugins: [],
};
