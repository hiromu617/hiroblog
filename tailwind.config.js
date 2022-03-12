module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './srcs/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
