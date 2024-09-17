/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark: "#0C0C0C",
        SemiDark: "#481E14",
        Medium: "#9B3922",
        Light: "#F2613F",
      },
    },
  },
  plugins: [],
};
