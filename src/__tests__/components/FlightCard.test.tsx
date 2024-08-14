import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from 'utils/test-helpers/renderWithRouter';
import { renderWithProvider } from 'utils/test-helpers/renderWithProvider';

import * as actions from '../../redux/ducks/modalSlice';

import { FlightData } from 'types/interfaces';

import FlightCard from 'components/FlightCard';

const flightData: FlightData = {
  searchId: '11',
  id: '1',
  price: 10000,
  carrier: 'SU',
  segments: [
    {
      origin: 'City A',
      destination: 'City B',
      date: '2024-08-01T10:00:00Z',
      duration: 120,
      stops: ['SVA'],
    },
    {
      origin: 'City B',
      destination: 'City A',
      date: '2024-08-10T12:00:00Z',
      duration: 150,
      stops: ['SVA'],
    },
  ],
};

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('FlightCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('FlightCard', () => {
    test('should render the correct price', () => {
      renderWithRouter(<FlightCard flightData={flightData} />);
      expect(screen.getByText(/10 000 Р/)).toBeInTheDocument();
    });

    test('should render the correct flight time', () => {
      renderWithRouter(<FlightCard flightData={flightData} />);
      expect(screen.getByText(/10:00 - 12:00/)).toBeInTheDocument();
    });

    test('should render the correct flight duration', () => {
      renderWithRouter(<FlightCard flightData={flightData} />);
      expect(screen.getByText(/2Ч 0М/)).toBeInTheDocument();
    });

    test('should render the correct route from City A to City B', () => {
      renderWithRouter(<FlightCard flightData={flightData} />);
      expect(screen.getByText(/City A - City B/i)).toBeInTheDocument();
    });

    test('should render the correct return route from City B to City A', () => {
      renderWithRouter(<FlightCard flightData={flightData} />);
      expect(screen.getByText(/City B - City A/i)).toBeInTheDocument();
    });

    test('should render the correct number of transfers', () => {
      renderWithRouter(<FlightCard flightData={flightData} />);
      expect(screen.getAllByText(/1 пересадка/i)).toHaveLength(2);
    });

    test('should render the correct airport code', () => {
      renderWithRouter(<FlightCard flightData={flightData} />);
      expect(screen.getAllByText(/SVA/)).toHaveLength(2);
    });
  });

  test('Should call dispatch when clicking on flightCard', () => {
    renderWithRouter(<FlightCard flightData={flightData} />);
    const flightCard = screen.getByTestId('flight-card');

    userEvent.click(flightCard);
    expect(mockDispatch).toHaveBeenCalled();
  });

  test('Should call action when clicking on flightCard', () => {
    const mockSetCurrentFlight = jest.spyOn(actions, 'setCurrentFlight');

    renderWithRouter(<FlightCard flightData={flightData} />);
    const flightCard = screen.getByTestId('flight-card');

    userEvent.click(flightCard);
    expect(mockSetCurrentFlight).toHaveBeenCalledWith('1');
  });

  test('Should match FlightCard snapshot', () => {
    const { asFragment } = renderWithProvider(
      <FlightCard flightData={flightData} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
