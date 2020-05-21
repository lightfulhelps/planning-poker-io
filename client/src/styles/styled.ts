import styled, { CreateStyled } from '@emotion/styled';

export type Theme = {
  colors: {
    black: string;
    white: string;

    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;

    blue: string;
    green: string;
    red: string;

    body: string;
    font: string;

    cardBg: string;
    cardBorder: string;
    inputBg: string;
    inputBorder: string;

    success: string;
    error: string;
    primary: string;
  };
  screens: {
    sm: '640px';
    md: '768px';
    lg: '1024px';
    xl: '1280px';
  };
  spacing: string[];
  borderRad: {
    default: '4px';
    none: '0';
    sm: '0.125rem';
    md: '0.25rem';
    lg: '0.5rem';
    full: '9999px';
  };
  fontFamily: {
    display: ['Gilroy', 'sans-serif'];
    body: ['Graphik', 'sans-serif'];
  };
  fontSize: {
    xs: '1rem';
    sm: '1.2rem';
    default: '1.4rem';
    md: '1.6rem';
    lg: '1.8rem';
    xl: '2.4rem';
  };
};

export default styled as CreateStyled<Theme>;
