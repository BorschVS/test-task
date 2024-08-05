import { combineReducers } from 'redux';
import { flights, form, modal, images } from './ducks';

export const rootReducer = combineReducers({
  flights,
  form,
  modal,
  images,
});

export type RootState = ReturnType<typeof rootReducer>;
