import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { Box } from '@mui/material';

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
        <Outlet />
      </Suspense>
    </main>
  );
};
