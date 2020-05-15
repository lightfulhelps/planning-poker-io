import React from 'react';
import { IOProvider } from '../contexts/io';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routing/routes';

import theme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import '../styles/fonts.css';
import CardIcon from './common/CardIcon';

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      html {
        font-size: 62.5%;
        font-family: 'Open Sans', sans-serif;
      }
      body {
        background-color: ${theme.colors.body};
        & * {
          box-sizing: border-box;
        }
        font-size: 14px;
      }
      h1 {
        font-size: 4rem;
      }
      h2 {
        font-size: 3.2rem;
      }
      h3 {
        font-size: 2.8rem;
      }
      h4 {
        font-size: 2.4rem;
      }
      h5 {
        font-size: 2rem;
      }
      h6 {
        font-size: 1.6rem;
      }
      .h1,
      .h2,
      .h3,
      .h4,
      .h5,
      .h6,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
      }
    `}
  />
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <IOProvider>
          <Routes />
        </IOProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
