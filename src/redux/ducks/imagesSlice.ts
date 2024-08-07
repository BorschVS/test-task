import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ImagesState } from 'types/interfaces';

export const GET_IMAGE_REQUEST = 'GET_IMAGE_REQUEST';
export const GET_IMAGE_FAILURE = 'GET_IMAGE_FAILURE';
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS';

const initialState: ImagesState = {
  images: {},
  loading: false,
  error: null,
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    getImageRequest(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getImageSuccess(
      state,
      action: PayloadAction<{ imageName: string; imageUrl: string }>
    ) {
      state.loading = false;
      state.images[action.payload.imageName] = action.payload.imageUrl;
    },
    getImageFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getImageRequest, getImageSuccess, getImageFailure } =
  imagesSlice.actions;

export default imagesSlice.reducer;
