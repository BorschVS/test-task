import {
  SET_IS_SHOWING,
  SET_CURRENT_FLIGHT
} from './constants';

const initialState = {
  isShowing: false,
  flightId: 0,
};

const modal = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_SHOWING:
      return {
        ...state,
        isShowing: payload
      };
      case SET_CURRENT_FLIGHT:
      return {
        ...state,
        flightId: payload,
      };
    default:
      return state;
  }
};

export default modal;
