/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      cuistot: "url(../public/cuistot.jpg)",
    },
    extend: {
      colors: {
        "red-ecf": "#FE4A49",
        "blue-ecf": "#2AB7CA",
        "yellow-ecf": "#FED766",
        "gray-dark-ecf": "#E6E6EA",
        "gray-light-ecf": "#F4F4F8",
      },
    },
  },
  plugins: [],
};
