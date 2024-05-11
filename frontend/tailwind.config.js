/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define custom colors here if needed
        cust_light: "rgb(17, 39, 51)",
        cust_dark: "rgb(0, 30, 43)",
        cust_green_light: "rgb(110, 240, 181)",
        cust_green_dark: "rgb(2, 51, 47)",
      },
    },
  },
  plugins: [require("daisyui")],
};
