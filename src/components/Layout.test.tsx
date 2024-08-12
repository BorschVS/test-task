import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from 'tests/helpers/renderWithRouter';
import Layout from './Layout';

describe('Layout test', () => {
  test('Should render ResponsiveAppBar', () => {
    renderWithRouter(<Layout />);

    expect(screen.getByTestId('responsive-app-bar')).toBeInTheDocument();
  });

  test('Should render home page', async () => {
    renderWithRouter(<Layout />, '/');

    const homeLinks = screen.getAllByTestId('home-link');

    homeLinks.forEach((link) => userEvent.click(link));

    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('Should render flights page', async () => {
    renderWithRouter(<Layout />, '/flights');

    const flightsLinks = screen.getAllByTestId('flights-link');

    flightsLinks.forEach((link) => userEvent.click(link));

    await waitFor(() => {
      expect(screen.getByTestId('flights-page')).toBeInTheDocument();
    });
  });

  test('Should render hotels page', async () => {
    renderWithRouter(<Layout />, '/hotels');

    const hotelsLinks = screen.getAllByTestId('hotels-link');

    hotelsLinks.forEach((link) => userEvent.click(link));

    await waitFor(() => {
      expect(screen.getByTestId('hotels-page')).toBeInTheDocument();
    });
  });
});
