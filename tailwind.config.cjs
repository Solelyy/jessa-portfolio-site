/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#F9FAFB",
        darkBg: "#030712",
        lightBorder: "#E5E7EB",
        darkBorder: "#1F2937",
        accent: "#EC4899",
        darkCard: "#111827"
      },
    },
  },
  plugins: [],
};
