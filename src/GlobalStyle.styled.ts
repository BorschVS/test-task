import { createGlobalStyle } from 'styled-components';
import theme from 'theme';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${theme.typography.fontWeightBold};
  }
  p {
    margin: 0;
  }
`;
