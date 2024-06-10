/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple, // Adjust to your desired primary color
      secondary: colors.pink, // Adjust to your desired secondary color
      text: {
        DEFAULT: "#222222", // Set a default dark text color for all elements
        primary: "#333333", // Optional: Define a darker text color for specific use cases
       },
    },
  },
  plugins: [],
};
