/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: "#FCC42C",
        secondary: "#71717A",
      },
      fontSize: {
        sm: "0.6rem",
        base: "0.8rem",
        lg: ".9rem",
        xl: "1rem",
        "2xl": "1.200rem",
        "3xl": "1.753rem",
        "4xl": "2.241rem",
        "5xl": "2.852rem",
      },
    },
  },
  plugins: [],
};
