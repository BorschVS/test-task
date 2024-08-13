import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from 'utils/test-helpers/renderWithRouter';

import App from 'components/App';

describe('Router page rendering test', () => {
  test('Should determine home page', async () => {
    renderWithRouter(<App />, '/');

    const homePages = await screen.findAllByTestId('home-page');
    homePages.forEach((page) => expect(page).toBeInTheDocument());

    const flightsLinks = screen.getAllByTestId('flights-link');
    flightsLinks.forEach((link) => {
      if (link.textContent === 'FLY!') {
        userEvent.click(link);
      }
      expect(link).toBeInTheDocument();
    });
  });

  test('Should determine flights page', async () => {
    renderWithRouter(<App />, '/flights');

    const flightsPages = await screen.findAllByTestId('flights-page');
    flightsPages.forEach((page) => expect(page).toBeInTheDocument());
  });

  test('Should determine hotels page', async () => {
    renderWithRouter(<App />, '/hotels');

    const hotelsPages = await screen.findAllByTestId('hotels-page');
    hotelsPages.forEach((page) => expect(page).toBeInTheDocument());
  });

  test('App snapshot', () => {
    const { asFragment } = renderWithRouter(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
