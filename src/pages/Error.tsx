import useMediaQuery from '@mui/material/useMediaQuery';
import { Helmet } from 'react-helmet';
import { useTheme } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

import { AvatarImage } from 'components';

const Error = () => {
  return (
    <main data-testid="error-page">
      <Helmet>
        <title>Error</title>
      </Helmet>

      <Container>
        <Typography
          variant="h2"
          fontSize={30}
          marginTop={20}
          textTransform="uppercase"
          textAlign="center"
        >
          Error 404{' '}
        </Typography>
        <Typography
          variant="h1"
          fontSize={40}
          marginTop={4}
          textTransform="uppercase"
          textAlign="center"
        >
          Страница не найдена
        </Typography>
      </Container>
    </main>
  );
};

export default Error;
