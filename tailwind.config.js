/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'deep': '#222831',
      'slate': '#393E46',
      'accent': '#00ADB5',
      'snow': '#EEEEEE'
    },
    extend: {},
  },
  plugins: [],
}