/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f4ff",
          100: "#dce6ff",
          500: "#3b5bdb",
          600: "#2f4ac7",
          700: "#2340b0",
          900: "#0f1f6e",
        },
      },
    },
  },
  plugins: [],
};
