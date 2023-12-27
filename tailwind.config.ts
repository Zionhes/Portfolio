import type { Config } from 'tailwindcss'
const { createThemes } = require('tw-colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      twilight: {
        'primary': "#FEF3C7",
        'secondary': '#EF4444', // red-500
        "tertiary": "#534439",
        'primary-shadow': '#b2aa8b',
        'secondary-shadow': '#a73030',
      }
    })
  ],
} satisfies Config

