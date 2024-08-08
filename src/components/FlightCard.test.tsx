import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlightCard from './FlightCard';

import { FlightData } from 'types/interfaces';
import { Provider } from 'react-redux';
import store from 'redux/configureStore';

jest.mock('../utils', () => ({
  formatNumber: jest.fn((num: number) => `${num} Р`),
  formatTimeRange: jest.fn(() => '10:00 - 12:00'),
  formatFlightDuration: jest.fn(() => '2h'),
  formatTransfersWordEnding: jest.fn(() => '1 transfer'),
}));

describe('FlightCard Component', () => {
  const flightData: FlightData = {
    searchId: '11',
    id: '1',
    price: 10000,
    carrier: 'SU',
    segments: [
      {
        origin: 'City A',
        destination: 'City B',
        date: '2024-08-01',
        duration: 120,
        stops: ['DPO, SVA'],
      },
      {
        origin: 'City B',
        destination: 'City A',
        date: '2024-08-10',
        duration: 150,
        stops: ['SVA, DPO'],
      },
    ],
  };

  test('renders flight details correctly', () => {
    render(
      <Provider store={store}>
        <FlightCard flightData={flightData} />
      </Provider>
    );

    expect(screen.getByText(/10 000 Р/i)).toBeInTheDocument();
    expect(screen.getByText(/Airlines/i)).toBeInTheDocument();
    expect(screen.getByText(/City A - City B/i)).toBeInTheDocument();
    expect(screen.getByText(/10:00 - 12:00/i)).toBeInTheDocument();
    expect(screen.getByText(/2h/i)).toBeInTheDocument();
    expect(screen.getByText(/1 transfer/i)).toBeInTheDocument();
    expect(screen.getByText(/City B - City A/i)).toBeInTheDocument();
  });
});
