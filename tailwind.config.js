/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "lego-yellow": "#FFD700",
        "lego-red": "#DA291C",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/lego-bg.jpg')",
      },
      animation: {
        loading: "loading 3s linear infinite",
      },
      keyframes: {
        loading: {
          "0%, 20%, 40%, 60%, 80%, 100%": { opacity: 1 },
          "10%, 30%, 50%, 70%, 90%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
