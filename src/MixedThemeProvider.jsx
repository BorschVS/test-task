import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const MixedThemeProvider = ({ theme, children }) => (
  <MuiThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  </MuiThemeProvider>
);

export default MixedThemeProvider;
