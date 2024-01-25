/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        bouncing: "bounce 2s ease-in infinite",
      },
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
