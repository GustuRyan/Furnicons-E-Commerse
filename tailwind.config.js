/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#B88E2F',
        secondary: '#FFF3E3',
        sec_light: '#FFFBF6',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        'hero-image': "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/public/hero-image.png')",
        'home-hero' : "url('/public/home-hero-background.png')"
      },
    },
  },
  plugins: [],
}

