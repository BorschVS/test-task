import { screen, fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ResponsiveAppBar } from 'components';

import { GET_FLIGHTS } from '../../redux/ducks/flightsSlice';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('../../redux/ducks/flightsSlice', () => ({
    GET_FLIGHTS: 'GET_FLIGHTS',
}));

const renderWithRouter = () =>
    render(<MemoryRouter initialEntries={['/']}><ResponsiveAppBar /></MemoryRouter>)

describe('ResponsiveAppBar component', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should render correctly', () => {
        renderWithRouter();

        const appBar = screen.getByTestId('responsive-app-bar')
        expect(appBar).toBeInTheDocument();
    });

    test('Should dispatch GET_FLIGHTS action on "Flights" button click', () => {
        renderWithRouter();

        const flightsButtons = screen.getAllByTestId('flights-link');

        flightsButtons.forEach(button => fireEvent.click(button));

        expect(mockDispatch).toHaveBeenCalledWith({ type: GET_FLIGHTS });
    });
});
