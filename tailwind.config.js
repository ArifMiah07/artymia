/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        newAmsterdam: ['New Amsterdam', 'sans-serif'],
        bungeeTint: ['Bungee Tint', 'sans-serif'],
        matemasie: ['Matemasie', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
