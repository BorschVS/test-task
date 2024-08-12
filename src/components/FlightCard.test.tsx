import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlightCard from './FlightCard';

import { FlightData } from 'types/interfaces';
import { renderWithRouter } from 'tests/helpers/renderWithRouter';

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

describe('FlightCard Component', () => {
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
});
