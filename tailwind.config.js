/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px"
      },
      container: {
        center: true,
        padding: "1rem",
        screens: { xl: "1280px" }
      },
      colors: {
        primary: {
            100: "#ffd300",
            200: "#3a10e5",
            300: "#10162f",
            400: "#fff0e5",
            500: "#ffffff"
        }
      },
      backgroundImage: {
        noise : "url('/assets/noise.png')"
      }
    },
  },
  plugins: [],
}

