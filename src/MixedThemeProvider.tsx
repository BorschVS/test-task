import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import { Theme } from 'types/interfaces';

const MixedThemeProvider = ({
  theme,
  children,
}: {
  theme: Theme;
  children: ReactNode;
}) => (
  <MuiThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  </MuiThemeProvider>
);

export default MixedThemeProvider;
