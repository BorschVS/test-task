import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/configureStore';

import { CssBaseline } from '@mui/material';

import theme from './theme';
import MixedThemeProvider from './MixedThemeProvider';

import { App } from 'components';

import { GlobalStyle } from './GlobalStyle.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <MixedThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </MixedThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
