import { combineReducers } from 'redux';
import flights from '../modules/flights/reducers';
import modal from '../modules/modal/reducers';
import form from '../modules/form/reducers';

const rootReducer = combineReducers({
  flights,
  modal,
  form
});

export default rootReducer;
