import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactModal from 'components/ContactModal';
import { useSelector } from 'react-redux';
import { useModal } from 'hooks/useModal';
import { FlightData } from 'types/interfaces';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock('hooks/useModal', () => ({
    useModal: jest.fn(),
}));

jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    createPortal: (node: React.ReactNode) => node,
}));

const flightData: FlightData = {
    searchId: '11',
    id: '1',
    price: 10000,
    carrier: 'SU',
    segments: [
        {
            origin: 'City A',
            destination: 'City B',
            date: '2024-08-01T10:00:00Z',
            duration: 120,
            stops: ['SVA'],
        },
        {
            origin: 'City B',
            destination: 'City A',
            date: '2024-08-10T12:00:00Z',
            duration: 150,
            stops: ['SVA'],
        },
    ],
};

describe('ContactModal', () => {
    const mockToggleModal = jest.fn();
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
        (useSelector as unknown as jest.Mock).mockReturnValueOnce([
            flightData
        ])
            .mockReturnValueOnce('1');
        (useModal as jest.Mock).mockReturnValue({
            isShowing: true,
            toggleModal: mockToggleModal,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should render correctly when isShowing is true', () => {
        render(<ContactModal isShowing={true} hide={mockToggleModal} />);

        expect(screen.getByTestId('contact-modal')).toBeInTheDocument();
    });

    test('Should render FlightCard inside the modal', () => {
        render(<ContactModal isShowing={true} hide={mockToggleModal} />);

        expect(screen.getByTestId('flight-card')).toBeInTheDocument();
    });

    test('Should render Form inside the modal', () => {
        render(<ContactModal isShowing={true} hide={mockToggleModal} />);

        expect(screen.getByTestId('form')).toBeInTheDocument();
    });

    test('calls hide function when close button is clicked', () => {
        render(<ContactModal isShowing={true} hide={mockToggleModal} />);

        const closeButton = screen.getByLabelText('close');
        fireEvent.click(closeButton);

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });

    test('does not render modal when isShowing is false', () => {
        render(<ContactModal isShowing={false} hide={mockToggleModal} />);

        expect(screen.queryByTestId('contact-modal')).not.toBeInTheDocument();
    });

    test('Should match FlightCard snapshot', () => {
        const { asFragment } = render(
            <ContactModal isShowing={true} hide={mockToggleModal} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
