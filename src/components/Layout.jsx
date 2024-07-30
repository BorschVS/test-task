import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { Box } from '@mui/material';
import { ResponsiveAppBar } from 'components';

export const Layout = () => {
  return (
    <main>
      <Suspense
        fallback={
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop={4}
          >
            <RotatingLines width="4rem" strokeColor="#0e91fc" />
          </Box>
        }
      >
        <ResponsiveAppBar />
        <Outlet />
      </Suspense>
    </main>
  );
};
