/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // You can add your custom colors here
      },
      fontFamily: {
        // You can add your custom fonts here
      },
    },
  },
  plugins: [],
  // Enable modern features
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Enable modern color palette
  darkMode: "class",
};
