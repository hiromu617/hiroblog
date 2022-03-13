module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './srcs/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['winter', 'dark'],
  },
};
