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

  test('Should render radioButton with CHEAP_VALUE', async () => {
    const mockSetCategoryFilter = jest.spyOn(actions, 'setCategoryFilter');

    render(<CategoryFilter />);

    const radioButtonCheap = screen.getByTestId('radio-cheap');

    expect(radioButtonCheap).toBeInTheDocument();

    const radioButtonFast = screen.getByTestId('radio-fast');
    expect(radioButtonFast).toBeInTheDocument();

    userEvent.click(radioButtonFast);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSetCategoryFilter).toHaveBeenCalledWith(FAST_VALUE);

    userEvent.click(radioButtonCheap);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSetCategoryFilter).toHaveBeenCalledWith(CHEAP_VALUE);
  });

  test('Should render radioButton with FAST_VALUE', async () => {
    render(<CategoryFilter />);

    const radioButtonFast = screen.getByTestId('radio-fast');
    expect(radioButtonFast).toBeInTheDocument();
  });

  test('Should call dispatch when clicking on radio button with CHEAP_VALUE', async () => {
    render(<CategoryFilter />);
    const radioButtonCheap = screen.getByTestId('radio-cheap');

    userEvent.click(radioButtonCheap);
    expect(mockDispatch).toHaveBeenCalled();
  });

  test('Should call dispatch when clicking on radio button with FAST_VALUE', async () => {
    render(<CategoryFilter />);
    const radioButtonFast = screen.getByTestId('radio-fast');

    userEvent.click(radioButtonFast);
    expect(mockDispatch).toHaveBeenCalled();
  });

  test('Should call action with CHEAP_VALUE when clicking on radio button with CHEAP_VALUE', async () => {
    const mockSetCategoryFilter = jest.spyOn(actions, 'setCategoryFilter');

    render(<CategoryFilter />);
    const radioButtonCheap = screen.getByTestId('radio-cheap');

    userEvent.click(radioButtonCheap);
    expect(mockSetCategoryFilter).toHaveBeenCalledWith(CHEAP_VALUE);
  });

  test('Should call action with FAST_VALUE when clicking on radio button with FAST_VALUE', async () => {
    const mockSetCategoryFilter = jest.spyOn(actions, 'setCategoryFilter');

    render(<CategoryFilter />);
    const radioButtonFast = screen.getByTestId('radio-fast');

    userEvent.click(radioButtonFast);
    expect(mockSetCategoryFilter).toHaveBeenCalledWith(FAST_VALUE);
  });

  test('Should match CategoryFilter snapshot', () => {
    const { asFragment } = render(<CategoryFilter />);

    expect(asFragment()).toMatchSnapshot();
  });
});
