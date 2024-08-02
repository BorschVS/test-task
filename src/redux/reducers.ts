import { combineReducers } from 'redux';
import {
  flightsReducer,
  formReducer,
  modalReducer,
  imagesReducer,
} from './ducks';

export const rootReducer = combineReducers({
  flightsReducer,
  formReducer,
  modalReducer,
  imagesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
