module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-in-bottom': 'slide-in-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
      },
      keyframes: {
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(1000px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  darkMode: 'media',
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['winter'],
  },
  mode: 'jit',
};
