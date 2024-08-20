import { screen, fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { TransferFilter } from 'components';

import { setAllStops, setStopsFilter, setStopsFilterStatus } from '../../redux/ducks/flightsSlice';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('../../redux/ducks/flightsSlice', () => ({
    setAllStops: jest.fn(),
    setStopsFilter: jest.fn(),
    setStopsFilterStatus: jest.fn(),
}));

describe('TransferFilter component', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useSelector as unknown as jest.Mock).mockReturnValueOnce([0]);
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Should render TransferFilter correctly', () => {
        render(<TransferFilter />);

        const header = screen.getByText('Количество пересадок');
        expect(header).toBeInTheDocument();
    });

    test('Should dispatch setAllStops when "Все" checkbox is checked', () => {
        render(<TransferFilter />);

        const checkboxAll = screen.getByLabelText('Все');
        fireEvent.click(checkboxAll);

        expect(mockDispatch).toHaveBeenCalledWith(setAllStops());
    });

    test('Should dispatch setStopsFilter with empty array when "Все" checkbox is unchecked', () => {
        render(<TransferFilter />);

        const checkboxAll = screen.getByLabelText('Все');
        fireEvent.click(checkboxAll);

        expect(mockDispatch).toHaveBeenCalledWith(setStopsFilter([]));
    });

    test('Should dispatch setStopsFilterStatus after changing the filter', () => {
        render(<TransferFilter />);

        const checkbox = screen.getByLabelText('Без пересадок');
        fireEvent.click(checkbox);

        expect(mockDispatch).toHaveBeenCalledWith(setStopsFilterStatus());
    });

    test('Should selecting "Без пересадок" updates the filter', () => {
        render(<TransferFilter />);

        const checkbox = screen.getByLabelText('Без пересадок');
        fireEvent.click(checkbox);

        expect(mockDispatch).toHaveBeenCalledWith(setStopsFilter([0]));
    });

    test('Should selecting "1 пересадка" updates the filter', () => {
        render(<TransferFilter />);

        const checkbox = screen.getByLabelText('1 пересадка');
        fireEvent.click(checkbox);

        expect(mockDispatch).toHaveBeenCalledWith(setStopsFilter([1]));
    });

    test('Should selecting multiple options updates the filter accordingly', () => {
        render(<TransferFilter />);

        const checkboxOneTransfer = screen.getByLabelText('1 пересадка');
        const checkboxTwoTransfers = screen.getByLabelText('2 пересадки');

        fireEvent.click(checkboxOneTransfer);
        fireEvent.click(checkboxTwoTransfers);

        expect(mockDispatch).toHaveBeenCalledWith(setStopsFilter([1, 2]));
    });

    test('Should check "all" checkbox if all checkboxes is checked', () => {
        render(<TransferFilter />);

        const checkboxWhithoutTransfers = screen.getByLabelText('Без пересадок');
        const checkboxOneTransfer = screen.getByLabelText('1 пересадка');
        const checkboxTwoTransfers = screen.getByLabelText('2 пересадки');
        const checkboxThreeTransfers = screen.getByLabelText('3 пересадки');

        fireEvent.click(checkboxWhithoutTransfers);
        fireEvent.click(checkboxOneTransfer);
        fireEvent.click(checkboxTwoTransfers);
        fireEvent.click(checkboxThreeTransfers);

        expect(mockDispatch).toHaveBeenCalledWith(setStopsFilter([0, 1, 2, 3]));
    });

    test('Should match TransferFilter snapshot', () => {
        const { asFragment } = render(
            <TransferFilter />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});