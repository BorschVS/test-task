import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
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

  test('Should render flight details', async () => {
    renderWithRouter(<FlightCard flightData={flightData} />);

    await waitFor(() => {
      expect(screen.getByText(/10 000 Р/)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/10:00 - 12:00/)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/2Ч 0М/)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getAllByText(/1 пересадка/i).length).toBe(2);
    });

    await waitFor(() => {
      expect(screen.getByText(/City A - City B/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/City B - City A/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getAllByText(/SVA/)).toHaveLength(2);
    });
  });

  test('Should render modal on click', () => {
    const mockSetCurrentFlight = jest.spyOn(actions, 'setCurrentFlight');

    renderWithRouter(<FlightCard flightData={flightData} />);

    const flightCard = screen.getByTestId('flight-card');

    userEvent.click(flightCard);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSetCurrentFlight).toHaveBeenCalledWith('1');
  });

  test('FlightCard snapshot', () => {
    const { asFragment } = renderWithProvider(
      <FlightCard flightData={flightData} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
