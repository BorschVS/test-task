import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from 'types/interfaces';

export const SET_CURRENT_FLIGHT = 'SET_CURRENT_FLIGHT';
export const SET_IS_SHOWING = 'SET_IS_SHOWING';

const initialState: ModalState = {
  isShowing: false,
  flightId: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsShowing(state, action: PayloadAction<boolean>) {
      state.isShowing = action.payload;
    },
    setCurrentFlight(state, action: PayloadAction<string>) {
      state.flightId = action.payload.toString();
    },
  },
});

export const { setIsShowing, setCurrentFlight } = modalSlice.actions;

export default modalSlice.reducer;
