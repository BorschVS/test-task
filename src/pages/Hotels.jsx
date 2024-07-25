import { Helmet } from 'react-helmet';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Container, Avatar } from '@mui/material';

import PlaneImg from '../images/plane.png';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Flights = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <main>
      <Helmet>
        <title>Hotels</title>
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
      </Container>
    </main>
  );
};

export default Flights;
