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
      keyframes: {
        marquee: {
<<<<<<< HEAD
<<<<<<< HEAD
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // moves half of the duplicated track
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite', // adjust duration for speed
=======
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee linear infinite',
>>>>>>> aa0f26d (fix 9)
=======
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // moves half of the duplicated track
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite', // adjust duration for speed
>>>>>>> 271be45 (fix 11)
      },
    },
  },
  plugins: [],
};
