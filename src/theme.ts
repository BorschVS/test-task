import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Theme } from 'types/interfaces';

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0',
      paper: '#ffffff', // white
    },
    text: {
      primary: '#676767',
      secondary: '#8a8a8a',
      disabled: '#999999', // gray
    },
    primary: {
      main: '#3b3dcc',
      light: '#ffffff',
      dark: '#000000',
      contrastText: '#519deb', //blue
    },
    secondary: {
      main: '#ffffff',
      light: '#3b3dcc',
      dark: '#cdcdcd',
      contrastText: '#519deb', //blue
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeightMedium: 500,
    fontWeightRegular: 600, // semiBold
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
}) as Theme;

export default theme;
