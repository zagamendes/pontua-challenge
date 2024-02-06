/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      primary: {
        200: '#747D94',
        600: '#213770',
        500: '#293D71',
        800: '#00113D',
      },
      active: {
        400: '#F43724',
        500: '#F21A05',
        700: '#F21A05',
      },
      disabled: '#C3C3C3',
      gray: {
        50: '#F9FAFB',
        100: '#EAECF0',
        300: '#D0D5DD',
        500: '#777777',
        tabText: '#717171',
      },
      divider: '#EBEFF2',
      black: '#000000',
      transparent: '#00000000',
    },
    boxShadow: {
      myshadow: '0 0px 10px -5px rgba(0, 0, 0)',
      tabshadow: 'rgba(0,0,0,.2) 0 0 2px',
    },
  },

  plugins: [],
};
