/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: "#fff4f4",
          100: "#ffe3e3",
          200: "#ffc7c7",
          300: "#ff9d9d",
          400: "#ff6464",
          500: "#fb3838",
          600: "#e71d36",
          700: "#b3122d",
          800: "#861226",
          900: "#65111f",
        },
        sand: "#f7f3f0",
        ink: "#201819",
      },
      boxShadow: {
        soft: "0 16px 40px rgba(92, 22, 30, 0.08)",
        glass: "0 10px 30px rgba(141, 26, 37, 0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        body: ['"Manrope"', "sans-serif"],
        display: ['"Fraunces"', "serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at top, rgba(179, 18, 45, 0.12), rgba(255,255,255,0) 45%)",
      },
    },
  },
  plugins: [],
};
