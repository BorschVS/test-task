import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { getImageRequest } from '../../redux/ducks/imagesSlice';
import { BackgroundImage } from 'components';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../redux/ducks/imagesSlice', () => ({
  getImageRequest: jest.fn(),
}));

const imageName = 'default-bg.png';
const childText = 'Test Child';

describe('BackgroundImage component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should dispatch getImageRequest with correct imageName on mount', () => {
    render(<BackgroundImage imageName={imageName} />);

    expect(mockDispatch).toHaveBeenCalledWith(getImageRequest(imageName));
  });

  test('Should render Avatar with correct src attribute', () => {
    render(<BackgroundImage imageName={imageName} />);

    const box = screen.getByTestId('background-image');
    expect(box).toHaveStyle({
      backgroundImage: `url(/images/${imageName})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
    });
  });

  test('should render children inside Box', () => {
    render(
      <BackgroundImage imageName={imageName}>{childText}</BackgroundImage>
    );

    const box = screen.getByTestId('background-image');
    expect(box).toHaveTextContent(childText);
  });

  test('Should match FlightCard snapshot', () => {
    const { asFragment } = render(<BackgroundImage imageName={imageName} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
