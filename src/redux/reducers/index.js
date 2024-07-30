import { combineReducers } from 'redux';
import flights from '../modules/flights/reducers';
import modal from '../modules/modal/reducers';

const rootReducer = combineReducers({
  flights,
  modal,
});

export default rootReducer;
