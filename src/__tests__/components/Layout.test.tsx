import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
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

    const homePage = await screen.findByTestId('home-page');
    expect(homePage).toBeInTheDocument();
  });

  test('Should render flights page on click', async () => {
    renderWithRouter(<Layout />, '/flights');

    const flightsLinks = screen.getAllByTestId('flights-link');
    flightsLinks.forEach((link) => userEvent.click(link));

    const flightsPage = await screen.findByTestId('flights-page');
    expect(flightsPage).toBeInTheDocument();
  });

  test('Should render hotels page', async () => {
    renderWithRouter(<Layout />, '/hotels');

    const hotelsLinks = screen.getAllByTestId('hotels-link');
    hotelsLinks.forEach((link) => userEvent.click(link));

    const hotelsPage = await screen.findByTestId('hotels-page');
    expect(hotelsPage).toBeInTheDocument();
  });

  test('Should match Layout snapshot', () => {
    const { asFragment } = renderWithRouter(<Layout />);

    expect(asFragment()).toMatchSnapshot();
  });
});
