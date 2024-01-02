/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1022px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '1023px'},
      // => @media (min-width: 1023px) { ... }

      'xl': {'min': '1279px'},
      // => @media (min-width: 1279px) { ... }

      '2xl': {'min': '1535px'},
      // => @media (min-width: 1535px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        amc:{
          primary:'#FFA400',
        },
      },
      fontFamily: {
        'campton-light': ['campton-light', 'sans'],
        'campton-normal': ['campton-normal', 'sans'],
        'campton-medium': ['campton-medium', 'sans'],
        'campton-semibold': ['campton-semibold', 'sans'],
        'campton-bold': ['campton-bold', 'sans'],
      },
    },
  },
  plugins: [],
}
