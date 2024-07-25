import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline } from '@mui/material';

import MixedThemeProvider from './MixedThemeProvider';
import { App } from './components/index';

import theme from './theme';

import { GlobalStyle } from './GlobalStyle.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MixedThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <App />
    </MixedThemeProvider>
  </React.StrictMode>,
);
