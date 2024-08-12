import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { Button, Typography } from '@mui/material';

import { BackgroundImage } from 'components';

import { AppDispatch } from 'redux/configureStore';
import { GET_FLIGHTS } from '../redux/ducks/flightsSlice';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleFlights = () => {
    dispatch({ type: GET_FLIGHTS });
  };

  return (
    <main data-testid="home-page">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <BackgroundImage imageName="home-bg.jpg">
        <Typography
          textAlign="center"
          variant="h1"
          fontSize={40}
          padding="120px 0 0 0"
          fontWeight={(theme) => theme.typography.fontWeightMedium}
          textTransform="uppercase"
          color={(theme) => theme.palette.primary.light}
        >
          <Typography
            component="span"
            sx={{
              color: (theme) => theme.palette.primary.contrastText,
              backgroundColor: (theme) => theme.palette.primary.light,
              fontSize: '40px',
              borderRadius: '10px',
              padding: '6px',
            }}
          >
            LetsFly!
          </Typography>{' '}
          Airlines
        </Typography>
        <Typography
          textAlign="center"
          variant="h2"
          fontSize={18}
          margin="40px 0"
          fontWeight={(theme) => theme.typography.fontWeightMedium}
          textTransform="uppercase"
          color={(theme) => theme.palette.primary.light}
        >
          PRESS THE BUTTON TO FLY!
        </Typography>
        <Link
          to="flights"
          style={{ textDecoration: 'none', color: 'inherit' }}
          data-testid="flights-link"
        >
          <Button
            variant="contained"
            sx={{
              display: 'block',
              margin: '0 auto',
              padding: '8px 60px',
              color: (theme) => theme.palette.primary.light,
              backgroundColor: (theme) => theme.palette.primary.contrastText,
              fontSize: 24,
              ':hover': {
                backgroundColor: (theme) => theme.palette.background.paper,
              },
            }}
            onClick={handleFlights}
          >
            FLY!
          </Button>
        </Link>
      </BackgroundImage>
    </main>
  );
};

export default Home;
