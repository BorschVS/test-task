import { combineReducers } from 'redux';
import flights from '../modules/flights/reducers';

const rootReducer = combineReducers({
  flights,
});

export default rootReducer;
