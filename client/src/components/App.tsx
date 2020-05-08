import React from 'react';
import { IOProvider } from '../contexts/io';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routing/routes';

import theme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      html {
        font-size: 62.5%;
        font-family: 'Open sans', sans-serif;
      }
      body {
        background-color: ${theme.colors.body};
        & * {
          box-sizing: border-box;
        }
        font-size: 14px;
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
