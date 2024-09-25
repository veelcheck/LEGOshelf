/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "lego-yellow": "#FFD700",
        "lego-red": "#DA291C",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/lego-bg.jpg')",
      },
    },
  },
  plugins: [],
};
