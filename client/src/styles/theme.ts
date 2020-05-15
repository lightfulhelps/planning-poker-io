// import DesignSystem from 'design-system-utils';
// import facepaint from 'facepaint';
// import values from 'lodash/values';

const spacing = {
  baseline: 2,
  unit: 'rem',
};

export default {
  colors: {
    black: '#333',
    white: '#fff',

    gray100: '#f7fafc',
    gray200: '#edf2f7',
    gray300: '#e2e8f0',
    gray400: '#cbd5e0',
    gray500: '#a0aec0',
    gray600: '#718096',
    gray700: '#4a5568',
    gray800: '#2d3748',
    gray900: '#1a202c',

    blue: '#6772E5',
    green: '#24B47E',
    red: '#cd3d64',

    body: '#f6f9fc',
    font: '#525F7F',

    get primary() {
      return this.blue;
    },

    get error() {
      return this.red;
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: [
    '0',
    spacing.baseline * 0.25 + spacing.unit,
    spacing.baseline * 0.5 + spacing.unit,
    spacing.baseline * 1 + spacing.unit,
    spacing.baseline * 1.25 + spacing.unit,
    spacing.baseline * 1.5 + spacing.unit,
    spacing.baseline * 1.75 + spacing.unit,
    spacing.baseline * 2 + spacing.unit,
    spacing.baseline * 2.25 + spacing.unit,
  ],
  borderRad: {
    default: '4px',
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  fontFamily: {
    display: ['Gilroy', 'sans-serif'],
    body: ['Graphik', 'sans-serif'],
  },
  fontSize: {
    xs: '1rem',
    sm: '1.2rem',
    default: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2.4rem',
  },
} as const;

// const breakpoints = values(theme.screens);

// export const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

// export default theme;

// export default new DesignSystem(theme);
