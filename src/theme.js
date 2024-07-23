import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f0f0f0",
      white: "#ffffff",
    },
    text: {
      primary: "#676767",
      secondary: "#8a8a8a",
    },
    primary: {
      main: "#3b3dcc",
      light: "#757ce8",
      dark: "#002884",
      blue: "#519deb",
    },
    secondary: {
      main: "#f50057",
      light: "#ff4081",
      dark: "#c51162",
      blue: "#519deb",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default theme;
