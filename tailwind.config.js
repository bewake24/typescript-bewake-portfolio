/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e3a',
        "dark-blue": "#05051E",
        glass: {
          100: "#1e1e3a",
          200: "#e2e8ff",
        }
      },

    },
  },
  backgroundImage: {
    primary:
      "linear-gradient(rgba(153,104,255,1) 0%, rgba(255,108,178,1) 49%, rgba(255,175,86,1) 100%);",
    "primary-30":
      "linear-gradient(30deg, rgba(153,104,255,1) 0%, rgba(255,108,178,1) 49%, rgba(255,175,86,1) 100%);",
    "primary-120":
      "linear-gradient(120deg, rgba(153,104,255,1) 0%, rgba(255,108,178,1) 49%, rgba(255,175,86,1) 100%);",
    webpack: "url('/src/assets/images/avatar01.webp')",
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}