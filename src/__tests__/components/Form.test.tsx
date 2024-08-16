import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../redux/ducks/formSlice';
import Form from 'components/Form';
import { useModal } from 'hooks/useModal';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../redux/ducks/formSlice', () => ({
  setFormData: jest.fn(),
}));

jest.mock('hooks/useModal', () => ({
  useModal: jest.fn(() => ({
    toggleModal: jest.fn(),
  })),
}));

describe('Form component', () => {
  const mockDispatch = jest.fn();
  const mockToggleModal = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useModal as jest.Mock).mockReturnValue({
      isShowing: false,
      toggleModal: mockToggleModal,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render form with initial empty name field', () => {
    render(<Form />);

    const nameFields = screen.getAllByLabelText('Имя и фамилия');
    nameFields.forEach((field) => expect(field).toHaveValue(''));
  });

  test('Should render form with initial empty phone field', () => {
    render(<Form />);

    const phoneFields = screen.getAllByLabelText('Телефон');
    phoneFields.forEach((field) => expect(field).toHaveValue(''));
  });

  test('Should render form with initial empty email field', () => {
    render(<Form />);

    const postFields = screen.getAllByLabelText('Почта');
    postFields.forEach((field) => expect(field).toHaveValue(''));
  });

  test('Should display validation error for empty name field', async () => {
    render(<Form />);

    const submitButton = screen.getByText('Отправить');
    fireEvent.click(submitButton);

    const validationMessage = await screen.findByText('Введите имя');
    expect(validationMessage).toBeInTheDocument();
  });

  test('Should display validation error for empty phone field', async () => {
    render(<Form />);
    const submitButton = screen.getByText('Отправить');
    fireEvent.click(submitButton);

    const validationMessage = await screen.findByText('Введите номер');
    expect(validationMessage).toBeInTheDocument();
  });

  test('Should display validation error for empty email field', async () => {
    render(<Form />);

    const submitButton = screen.getByText('Отправить');
    fireEvent.click(submitButton);

    const validationMessage = await screen.findByText('Введите email');
    expect(validationMessage).toBeInTheDocument();
  });

  test('Should call dispatch on valid submit', async () => {
    render(<Form />);

    const nameField = screen.getByLabelText('Имя и фамилия');
    const phoneField = screen.getByLabelText('Телефон');
    const emailField = screen.getByLabelText('Почта');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(phoneField, { target: { value: '1234567890' } });
    fireEvent.change(emailField, { target: { value: 'john@example.com' } });

    const submitButton = screen.getByText('Отправить');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        setFormData({
          name: 'John Doe',
          phone: '1234567890',
          email: 'john@example.com',
        })
      );
    });
  });

  test('Should call toggleModal on submit', async () => {
    render(<Form />);

    const nameField = screen.getByLabelText('Имя и фамилия');
    const phoneField = screen.getByLabelText('Телефон');
    const emailField = screen.getByLabelText('Почта');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(phoneField, { target: { value: '1234567890' } });
    fireEvent.change(emailField, { target: { value: 'john@example.com' } });

    const submitButton = screen.getByText('Отправить');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockToggleModal).toHaveBeenCalled();
    });
  });

  test('Should match FlightCard snapshot', () => {
    const { asFragment } = render(<Form />);

    expect(asFragment()).toMatchSnapshot();
  });
});
