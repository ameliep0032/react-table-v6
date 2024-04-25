const withAnimations = require('animated-tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme');

// DOCS https://tailwindcss.com/docs/customizing-colors/#naming-your-colors
module.exports = withAnimations({
  important: true,
  purge: {
    // https://v2.tailwindcss.com/docs/optimizing-for-production#purge-css-options
    enabled: true,
    //layers: ['components', 'utilities'],
    content: ['src/**/*.{html,js,jsx}'],
    options: {
      safelist: [/^w-/, /^h-/, /^m-/, /^p-/, /^bg-/, /^text-/, /^border-/, /^from-/, /^to-/]
    }
  },
  theme: {
    extend: {
      colors: require('./src/styles/colorsPalette'),
      screens: {
        // breakpoints = min-widths
        xs: '500px',
        ...defaultTheme.screens,
        tablet: '640px',
        laptop: '768px',
        desktop: '1280px'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        lg: '0 5px 20px -2px rgba(0, 0, 0, 0.1)'
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        lg: '0.6rem',
        xl: '0.8rem'
      },
      width: {
        ...defaultTheme.width,
        '0/12': '0%',
        sm: '0.8rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3.5rem',
        '4xl': '4.5rem',
        '5xl': '6.5rem'
      },
      maxWidth: {
        ...defaultTheme.maxWidth,
        '2xs': '10rem',
        '3xl': '65rem',
        '8xl': '100rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '520': '520px',
        '540': '540px'
      },
      minWidth: {
        ...defaultTheme.minWidth,
        '2/3': '66%',
        '64': '16rem'
      },
      maxHeight: {
        ...defaultTheme.maxHeight,
        '520': '520px',
        '540': '540px'
      },
      height: {
        ...defaultTheme.height,
        sm: '0.8rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3.5rem',
        '4xl': '4.5rem',
        '5xl': '6.5rem',
        p70: '70%',
        inactiveModal: '660px',
        inactiveModalFAQs: '48.25%',
        '128': '32rem'
      },
      lineHeight: {
        '4': '2.4rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem'
      },
      zIndex: {
        ...defaultTheme.zIndex,
        '-1': '-1',
        '-10': '-10',
        '999': '999',
        '9999': '9999'
      },
      cursor: {
        ...defaultTheme.cursor,
        grab: 'grab'
      },
      flex: {
        '3': '0 0 33.333333%'
      },
      minHeight: {
        '24': '6rem',
        '285': '285px', // Overview recent event container
        '350': '350px' // Overview goals cards container
      },
      scale: {
        '102': '1.02'
      }
    }
  },
  variants: {
    visibility: ['group-hover']
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/custom-forms')]
});
