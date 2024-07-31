import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container, Avatar, Grid } from '@mui/material';

import { TransferFilter, CategoryFilter, FlightCard } from '../components';

import { getFlights } from '../redux/modules/flights/actions';

import PlaneImg from 'images/plane.png';

const Flights = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
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

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <main>
      <Helmet>
        <title>Flights</title>
      </Helmet>
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
            {stopsFilterStatus
              ? filteredFlights.map((flight) => (
                  <FlightCard key={flight.id} flightData={flight} />
                ))
              : !stopsFilterStatus &&
                !filteredFlights.length &&
                availableFlights.map((flight) => (
                  <FlightCard key={flight.id} flightData={flight} />
                ))}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Flights;
