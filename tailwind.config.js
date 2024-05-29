/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#3369FF',
      'selected': 'rgba(0, 0, 255, 2)',
      'white': '#FFFFFF',
      'black': '#292D32',
      'green': '#3ABF38',
      'gray-p': '#EEEEEE',
      'gray-s': '#505050',
      'input': '#A1A1A1'
    },
    fontFamily: {
      display: 'Nunito'
    },
    extend: {
      width: {
        'icon': '25px'
      },
      height: {
        'icon': '25px'
      }
    },
  },
  plugins: [],
}