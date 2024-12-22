/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '22': '22px', 
        '26':'25px'
      },
      height: {
        '90vh':'89vh',
        '1000px':'900px'
      },
      backgroundColor:{
        'bgcolor':'#806AAB'
      }
    },
  },
  plugins: [],
}

