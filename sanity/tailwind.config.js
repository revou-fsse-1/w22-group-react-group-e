/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'sonic-silver': {
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#BABABA',
          400: '#A3A3A3',
          500: '#8C8C8C',
          600: '#757575',
          700: '#5E5E5E',
          800: '#474747',
          900: '#303030',
        },
        'dark-green': {
          100: '#D9ECEB',
          200: '#B3DAD7',
          300: '#8DC8C3',
          400: '#67B6AF',
          500: '#41A49B',
          600: '#1B9287',
          700: '#007F72',
          800: '#00665E',
          900: '#004D49',
        },
        'baby-powder': {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        'anti-flash-white': {
          100: '#F7F9F8',
          200: '#EFF3F2',
          300: '#E6EDEB',
          400: '#DEE7E5',
          500: '#D6E1DF',
          600: '#CFDBD9',
          700: '#C7D5D3',
          800: '#BFCFCD',
          900: '#B7C9C7',
        },
        'wintergreen-dream': {
          100: '#E6F2E9',
          200: '#CCE6D3',
          300: '#B3DABD',
          400: '#99CFA7',
          500: '#80C391',
          600: '#66B77B',
          700: '#4DAC65',
          800: '#339F4F',
          900: '#1A9339',
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
