import useMediaQuery from '@mui/material/useMediaQuery';
import { Helmet } from 'react-helmet';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

import { AvatarImage } from 'components';

const Hotels = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <main data-testid="hotels-page">
      <Helmet>
        <title>Hotels</title>
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
      </Container>
    </main>
  );
};

export default Hotels;
