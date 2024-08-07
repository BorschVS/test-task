import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { RotatingLines } from 'react-loader-spinner';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Box, Typography } from '@mui/material';

import {
  TransferFilter,
  CategoryFilter,
  FlightCard,
  AvatarImage,
} from 'components';

import { ReduxState } from 'types/interfaces';
import { GET_FLIGHTS } from '../redux/ducks/flightsSlice';
import { AppDispatch } from 'redux/configureStore';

const Flights = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_FLIGHTS });
  }, [dispatch]);

  const { availableFlights, filteredFlights, stopsFilter, loading, error } =
    useSelector((state: ReduxState) => state?.flights);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <main>
      <Helmet>
        <title>Flights</title>
      </Helmet>
      <Container maxWidth={mobile ? 'sm' : 'md'}>
        <AvatarImage
          imageName={'plane.png'}
          alt="Lets fly logo"
          component="div"
          margin="40px auto"
          width={60}
          height={60}
        />
        <Grid
          container
          spacing={mobile ? 2 : 4}
          direction={`${mobile ? 'column' : 'row'}`}
          justifyContent={'center'}
        >
          <Grid item xs={4} md={5} justifyContent={'center'}>
            <TransferFilter />
          </Grid>
          <Grid item xs={7}>
            <CategoryFilter />
            {loading ? (
              <Box
                component="div"
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop={4}
              >
                <RotatingLines width="4rem" strokeColor="#0e91fc" />
              </Box>
            ) : !loading && !error && stopsFilter.length ? (
              filteredFlights.map((flight) => (
                <FlightCard key={flight.id} flightData={flight} />
              ))
            ) : (
              !loading &&
              !error &&
              (!stopsFilter.length || stopsFilter.length === 4) &&
              availableFlights.map((flight) => (
                <FlightCard key={flight.id} flightData={flight} />
              ))
            )}
            {!loading &&
              !error &&
              !availableFlights.length &&
              !filteredFlights.length && (
                <Typography
                  fontSize={18}
                  fontWeight={(theme) => theme.typography.fontWeightMedium}
                  textAlign={'center'}
                  textTransform="uppercase"
                  color={(theme) => theme.palette.text.primary}
                >
                  Рейсы отсутствуют
                </Typography>
              )}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Flights;
