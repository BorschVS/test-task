import '@testing-library/jest-dom';
import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {App} from 'components';

import { renderWithRouter } from 'utils/test-helpers/renderWithRouter';


afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetModules();
});

describe('Router page rendering test', () => {
  test('Should determine home page', async () => {
    renderWithRouter(<App />, '/');

    const homePages = await screen.findAllByTestId('home-page');
    homePages.forEach((page) => expect(page).toBeInTheDocument());
  });

  test('Should open Flights page when clicking on "FLY" button', async () => {
    renderWithRouter(<App />);

    const flightsLinks = screen.getAllByTestId('flights-link');
    flightsLinks.forEach((link) => {
      if (link.textContent === 'FLY!') {
        userEvent.click(link);
      }
    });

    const flightsPages = await screen.findAllByTestId('flights-page');

    await waitFor(() =>
      flightsPages.forEach((page) => expect(page).toBeInTheDocument())
    );
  });

  test('Should determine flights page', async () => {
    renderWithRouter(<App />, '/flights');

    const flightsPages = await screen.findAllByTestId('flights-page');
    await waitFor(() =>
      flightsPages.forEach((page) => expect(page).toBeInTheDocument())
    );
  });

  test('Should determine hotels page', async () => {
    renderWithRouter(<App />, '/hotels');

    const hotelsPages = await screen.findAllByTestId('hotels-page');
    await waitFor(() =>
      hotelsPages.forEach((page) => expect(page).toBeInTheDocument())
    );
  });

  test('Should match App snapshot', () => {
    const { asFragment } = renderWithRouter(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
