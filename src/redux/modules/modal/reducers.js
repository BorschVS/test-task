import {
  SET_IS_SHOWING
} from './constants';

const initialState = {
  isShowing: false,
};

const modal = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_SHOWING:
      return {
        ...state,
        isShowing: payload
      };
    default:
      return state;
  }
};

export default modal;
