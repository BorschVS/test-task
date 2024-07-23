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
      gray: "#999999",
    },
    primary: {
      main: "#3b3dcc",
      white: "#ffffff",
      black: "#000000",
      gray: "#cdcdcd",
      blue: "#519deb",
    },
    secondary: {
      main: "#f50057",
      white: "#ffffff",
      black: "#000000",
      gray: "#fefefe",
      blue: "#519deb",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
  },
});

export default theme;
