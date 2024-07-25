import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import theme from './theme';
import MixedThemeProvider from './MixedThemeProvider';

import { App } from './components/index';

import { GlobalStyle } from './GlobalStyle.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <MixedThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <App />
      </MixedThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
