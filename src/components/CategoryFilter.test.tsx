import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithRouter } from 'tests/helpers/renderWithRouter';
import { setCategoryFilter } from '../redux/ducks/flightsSlice';
import { CHEAP_VALUE } from '../constants';
import CategoryFilter from './CategoryFilter';
import userEvent from '@testing-library/user-event';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('CategoryFilter test', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test('Should render category filter and dispatch action on change', async () => {
    renderWithRouter(<CategoryFilter />);

    const radioButton = screen.getByRole('radio', { name: /Самый дешевый/i });

    expect(radioButton).toBeInTheDocument();

    userEvent.click(radioButton);

    console.log(mockDispatch.mock.calls);

    expect(mockDispatch).toHaveBeenCalledWith(setCategoryFilter(CHEAP_VALUE));
  });
});

//   test('Should change category filter value on click', () => {
//     renderWithRouter(<Flights />, '/flights');

//     const categoryFilter = screen.getByTestId('category-filter');

//     expect(categoryFilter).toBeInTheDocument();
//   });
