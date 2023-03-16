/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      // fontFamily: {
      //   sans: [
      //     "Inter",
      //     ...defaultTheme.fontFamily.sans,
      //   ],
      // },
      colors: {
        primaryBlue: '#1977F2',
      }
    },
  },
  plugins: [],
}