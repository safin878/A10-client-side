/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "32rem",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
