import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from 'utils/test-helpers/renderWithRouter';

import Layout from 'components/Layout';

describe('Layout test', () => {
  test('Should render ResponsiveAppBar', () => {
    renderWithRouter(<Layout />);

    expect(screen.getByTestId('responsive-app-bar')).toBeInTheDocument();
  });

  test('Should render home page on click', async () => {
    renderWithRouter(<Layout />, '/');

    const homeLinks = screen.getAllByTestId('home-link');

    homeLinks.forEach((link) => userEvent.click(link));

    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('Should render flights page on click', async () => {
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

  test('Should match Layout snapshot', () => {
    const { asFragment } = renderWithRouter(<Layout />);

    expect(asFragment()).toMatchSnapshot();
  });
});
