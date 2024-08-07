import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { Box } from '@mui/material';

import { ResponsiveAppBar, ContactModal } from 'components';

import { useModal } from 'hooks/useModal';

const Layout: FC = () => {
  const { isShowing, toggleModal } = useModal();

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
        <ContactModal isShowing={isShowing} hide={toggleModal} />
      </Suspense>
    </main>
  );
};

export default Layout;
