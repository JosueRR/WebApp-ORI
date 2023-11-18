/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myriad': ['Myriad Pro', 'sans-serif'],
      },
      colors: {
        'blueNormal': '#0099a3',
        'bluePressed': '#00777f',
        'YellowButton': '#ffaf00',
        'YellowButtonP': '#ffcd00',
        'OrangeNavBar' : '#ffaf00',
        'CelesteUCR' : '#00c0f3',
        'Celeste2UCR' : '#8ED8F8',
        grayish: '#807D7A',
        grayish_hoover: '#E4D080',
      },
      boxShadow: {
        'shadow-inner': '0px 0px 46px 0px rgba(0,0,0,0.70) inset',
      }
    },
  },
  plugins: [],
}

