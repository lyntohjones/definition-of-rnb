export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        oswald: ['Oswald', 'Impact', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-expo':  'cubic-bezier(0.64, 0, 0.78, 0)',
      },
      transitionProperty: {
        'colors-transform': 'color, background-color, border-color, transform',
      },
    },
  },
  plugins: [],
}
