/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{ 
        wrestlemania: ["Wrestlemania","sans"],
        tnafont: ["TnaFont", "sans"], 

    } },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

