import { combineReducers } from 'redux';
import { flights, form, modal, images } from './ducks';

const rootReducer = combineReducers({
    flights,
    form,
    modal,
    images
});

export default rootReducer;