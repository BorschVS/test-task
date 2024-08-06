import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Avatar } from '@mui/material';

import { Image } from 'types/interfaces';
import { AppDispatch } from 'redux/configureStore';

import { getImageRequest } from '../redux/ducks/images';

const AvatarImage: FC<Image> = ({
  imageName,
  alt,
  component = 'div',
  width = 40,
  height = 40,
  margin = '0',
}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getImageRequest(imageName));
  }, [dispatch, imageName]);

  return (
    <span>
      <Avatar
        component={component}
        src={`/images/${imageName}`}
        alt={alt}
        sx={{
          display: 'block',
          margin,
          width,
          height,
        }}
      />
    </span>
  );
};

export default AvatarImage;
