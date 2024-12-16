/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-down": "slide-down 300ms ease-out",
        bump: "bump 300ms ease-out",
      },
      keyframes: {
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-3rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bump: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(0.9)" },
          "30%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
