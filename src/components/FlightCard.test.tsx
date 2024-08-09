import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlightCard from './FlightCard';

import { FlightData } from 'types/interfaces';
import { Provider } from 'react-redux';
import store from 'redux/configureStore';

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
      stops: ['DPO, SVA'],
    },
    {
      origin: 'City B',
      destination: 'City A',
      date: '2024-08-10T12:00:00Z',
      duration: 150,
      stops: ['SVA, DPO'],
    },
  ],
};

describe('FlightCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders flight details correctly', async () => {
    render(
      <Provider store={store}>
        <FlightCard flightData={flightData} />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/10 000 Р/)).toBeInTheDocument();
    });

    expect(screen.getByText(/10:00 - 12:00/i)).toBeInTheDocument();

    expect(screen.getByText(/2Ч 0М/i)).toBeInTheDocument();

    expect(screen.getByText(/2 пересадки/i)).toBeInTheDocument();

    expect(screen.getByText(/City A - City B/i)).toBeInTheDocument();
    expect(screen.getByText(/City B - City A/i)).toBeInTheDocument();
  });
});
