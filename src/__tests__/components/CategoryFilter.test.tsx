import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import * as actions from '../../redux/ducks/flightsSlice';

import CategoryFilter from 'components/CategoryFilter';

import { CHEAP_VALUE, FAST_VALUE } from '../../constants';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('CategoryFilter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should click and call dispatch with correct action', async () => {
    const mockSetCategoryFilter = jest.spyOn(actions, 'setCategoryFilter');

    render(<CategoryFilter />);

    const radioButtonCheap = screen.getByTestId('radio-cheap');
    const radioButtonFast = screen.getByTestId('radio-fast');

    expect(radioButtonCheap).toBeInTheDocument();
    expect(radioButtonFast).toBeInTheDocument();

    userEvent.click(radioButtonFast);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSetCategoryFilter).toHaveBeenCalledWith(FAST_VALUE);

    userEvent.click(radioButtonCheap);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSetCategoryFilter).toHaveBeenCalledWith(CHEAP_VALUE);
  });

  test('CategoryFilter snapshot', () => {
    const { asFragment } = render(<CategoryFilter />);

    expect(asFragment()).toMatchSnapshot();
  });
});
