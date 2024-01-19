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
      desert: {
        "primary": "#FEF3C7", // yellow-100
        'primary-shadow': '#b2aa8b',
        "secondary": '#EF4444', // red-500
        'secondary-shadow': '#a73030',
        "tertiary": "#534439",
        "button": "#334155", // slate-700
        "button-shadow": "#0f172a" // slate-900
      }
    })
  ],
} satisfies Config

