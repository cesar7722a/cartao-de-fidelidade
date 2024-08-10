/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Oxygen"],
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #2DAA6E 0%,#2DAAAA 33.33%,  #856CCF 66.67%, #D658B3 100%)",
      },
    },
  },
  plugins: [],
};
