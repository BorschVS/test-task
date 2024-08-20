import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import { AvatarImage } from 'components';

import { getImageRequest } from '../../redux/ducks/imagesSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../redux/ducks/imagesSlice', () => ({
  getImageRequest: jest.fn(),
}));

const imageName = 'default-avatar.png';
const altText = 'Default avatar';

describe('AvatarImage component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should dispatch getImageRequest with correct imageName on mount', () => {
    render(<AvatarImage imageName={imageName} alt="User avatar" />);

    expect(mockDispatch).toHaveBeenCalledWith(getImageRequest(imageName));
  });

  test('Should render Avatar with correct src attribute', () => {
    render(<AvatarImage imageName={imageName} alt={altText} />);

    const avatar = screen.getByAltText(altText);
    expect(avatar).toHaveAttribute('src', `/images/${imageName}`);
  });

  test('Should render with imageName', () => {
    render(<AvatarImage imageName={imageName} alt={altText} />);

    const avatar = screen.getByAltText(altText);
    expect(avatar).toHaveAttribute('src', `/images/${imageName}`);
  });

  test('Should render with alt prop', () => {
    render(<AvatarImage imageName={imageName} alt={altText} />);

    const avatar = screen.getByAltText(altText);
    expect(avatar).toHaveAttribute('alt', altText);
  });

  test('Should match AvatarImage snapshot', () => {
    const { asFragment } = render(<AvatarImage imageName={imageName} alt={altText} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
