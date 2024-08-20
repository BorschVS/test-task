import { screen, fireEvent, render, cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ResponsiveAppBar } from 'components';

import { GET_FLIGHTS } from '../../redux/ducks/flightsSlice';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

const renderWithRouter = () => render(<MemoryRouter initialEntries={['/']}><ResponsiveAppBar /></MemoryRouter>);

describe('ResponsiveAppBar component', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    test('Should render ResponsiveAppBar correctly', () => {
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

    test('Should render "Flights" link', () => {
        renderWithRouter();

        const links = screen.getAllByTestId('flights-link');
        links.forEach(link => expect(link).toBeInTheDocument())
    });

    test('Should render "Hotels" link', () => {
        renderWithRouter();

        const links = screen.getAllByTestId('hotels-link');
        links.forEach(link => expect(link).toBeInTheDocument());
    });

    test('Should open mobile menu and expect Flights links', () => {
        renderWithRouter();

        const menuButton = screen.getByLabelText('account of current user');
        fireEvent.click(menuButton);

        const links = screen.getAllByText('Flights');
        links.forEach(link => expect(link).toBeInTheDocument());
    });

    test('Should open mobile menu and expect Hotels links', () => {
        renderWithRouter();

        const menuButton = screen.getByLabelText('account of current user');
        fireEvent.click(menuButton);

        const links = screen.getAllByText('Hotels');
        links.forEach(link => expect(link).toBeInTheDocument());
    });

    test('Should match ResponsiveAppBar snapshot', () => {
        const { asFragment } = renderWithRouter();

        expect(asFragment()).toMatchSnapshot();
    });
});
