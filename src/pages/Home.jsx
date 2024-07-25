import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

import { ResponsiveAppBar } from '../components/index';

import BgImg from '../images/home-bg.jpg';

const Home = () => (
  <main>
    <Helmet>
      <title>Flights</title>
    </Helmet>
    <ResponsiveAppBar />
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography
        textAlign="center"
        variant="h1"
        fontSize={40}
        padding="60px 0"
        fontWeight={(theme) => theme.typography.fontWeightMedium}
        textTransform="uppercase"
        color={(theme) => theme.palette.primary.white}
      >
        LetsFly Airlanes
      </Typography>
    </Box>
  </main>
);

export default Home;
