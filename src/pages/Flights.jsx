import { Helmet } from 'react-helmet';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Container, Avatar, Grid, Typography } from '@mui/material';

import {
  TransferFilter,
  CategoryFilter,
  FlightCard,
  ResponsiveAppBar,
} from '../components/index';

import PlaneImg from '../images/plane.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getFlights,
  setStopsFilterStatus,
} from '../redux/modules/flights/actions';

const Flights = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setStopsFilterStatus());
  }, [dispatch]);

  const stopsFilterStatus = useSelector(
    (state) => state?.flights?.stopsFilterStatus
  );

  const availableFlights = useSelector(
    (state) => state?.flights?.availableFlights
  );
  const filteredFlights = useSelector(
    (state) => state?.flights?.filteredFlights
  );

  return (
    <main>
      <Helmet>
        <title>Flights</title>
      </Helmet>

      <ResponsiveAppBar />

      <Container maxWidth={mobile ? 'sm' : 'md'}>
        <Avatar
          src={PlaneImg}
          alt="The company logo"
          sx={{
            display: 'block',
            margin: '40px auto',
            width: 60,
            height: 60,
          }}
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
            {stopsFilterStatus ? (
              filteredFlights.map((flight) => (
                <FlightCard key={flight.id} flightData={flight} />
              ))
            ) : !stopsFilterStatus && !filteredFlights.length ? (
              availableFlights.map((flight) => (
                <FlightCard key={flight.id} flightData={flight} />
              ))
            ) : (
              <Typography
                variant="h4"
                fontSize={16}
                textAlign="center"
                textTransform="uppercase"
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
