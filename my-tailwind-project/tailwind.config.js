/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  // ...other config options
};
