import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { Box, Button, Typography } from '@mui/material';

import { getFlights } from '../redux/modules/flights/actions';

import BgImg from 'images/home-bg.jpg';

const Home = () => {
  const dispatch = useDispatch();
  const handleFlights = () => {
    dispatch(getFlights());
  };
  return (
    <main>
      <Helmet>
        <title>Flights</title>
      </Helmet>

      <Box
        sx={{
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
          padding="100px 0 0 0"
          fontWeight={(theme) => theme.typography.fontWeightMedium}
          textTransform="uppercase"
          color={(theme) => theme.palette.primary.white}
        >
          <Typography
            variant="span"
            sx={{
              color: (theme) => theme.palette.primary.blue,
              backgroundColor: (theme) => theme.palette.primary.white,
              borderRadius: '10px',
              padding: '6px',
            }}
          >
            LetsFly!
          </Typography>{' '}
          Airlanes
        </Typography>
        <Typography
          textAlign="center"
          variant="h2"
          fontSize={18}
          margin="40px 0"
          fontWeight={(theme) => theme.typography.fontWeightMedium}
          textTransform="uppercase"
          color={(theme) => theme.palette.primary.white}
        >
          PRESS THE BUTTON TO FLY!
        </Typography>
        <Link to="flights" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button
            variant="contained"
            sx={{
              display: 'block',
              margin: '0 auto',
              padding: '8px 60px',
              color: (theme) => theme.palette.primary.white,
              backgroundColor: (theme) => theme.palette.primary.blue,
              fontSize: 24,
              ':hover': {
                backgroundColor: (theme) => theme.palette.primary.darkBlue,
              },
            }}
            onClick={handleFlights}
          >
            FLY!
          </Button>
        </Link>
      </Box>
    </main>
  );
};

export default Home;
