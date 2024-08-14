//libs
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//mui
import { CssBaseline } from '@mui/material';
//theme
import theme from './theme';
import MixedThemeProvider from './MixedThemeProvider';
//components
import { App } from './components';
//redux
import store from './redux/configureStore';
//styles
import { GlobalStyle } from 'GlobalStyle.styled';

const root = ReactDOM.createRoot(document.getElementById('root')!);
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
