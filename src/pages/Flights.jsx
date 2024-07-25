import { Helmet } from 'react-helmet';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Container, Avatar, Grid } from '@mui/material';

import {
  TransferFilter,
  CategoryFilter,
  FlightCard,
  ResponsiveAppBar,
} from '../components/index';

import PlaneImg from '../images/plane.png';

const Flights = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const tablet = useMediaQuery(theme.breakpoints.up('md'));

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
          direction={`${(mobile && 'column') || (tablet && 'row')}`}
          justifyContent={'center'}
        >
          <Grid item xs={4} md={5} justifyContent={'center'}>
            <TransferFilter />
          </Grid>
          <Grid item xs={7}>
            <CategoryFilter />
            <FlightCard />
            <FlightCard />
            <FlightCard />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Flights;
