import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from '@mui/material';

import { getImageRequest } from '../redux/ducks/images';
import { Image } from 'types/interfaces';
import { AppDispatch } from 'redux/configureStore';

const BackgroundImage: FC<Image> = ({ imageName, children }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getImageRequest(imageName));
  }, [dispatch, imageName]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: (theme) => theme.palette.primary.contrastText,
        backgroundImage: `url(/images/${imageName})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundImage;
