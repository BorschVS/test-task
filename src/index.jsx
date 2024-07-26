//react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
//mui
import { CssBaseline } from '@mui/material';
//theme
import theme from './theme';
import MixedThemeProvider from './MixedThemeProvider';
//components
import { App } from './components/index';
//styles
import { GlobalStyle } from './GlobalStyle.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <MixedThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </MixedThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
