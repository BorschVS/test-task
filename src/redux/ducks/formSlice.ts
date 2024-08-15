import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormState } from 'types/interfaces';

export const SET_FORM_DATA = 'SET_FORM_DATA';

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormState>) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.phone;
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
