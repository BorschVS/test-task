import { combineReducers } from '@reduxjs/toolkit';
import flightsReducer from './ducks/flightsSlice';
import formReducer from './ducks/formSlice';
import modalReducer from './ducks/modalSlice';
import imagesReducer from './ducks/imagesSlice';

const rootReducer = combineReducers({
  flights: flightsReducer,
  form: formReducer,
  modal: modalReducer,
  images: imagesReducer,
});

export default rootReducer;
