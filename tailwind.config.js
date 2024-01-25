/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image-egypt": "url('./public/assets/egypt.webp')",
      },
    },
  },
  plugins: [],
};
