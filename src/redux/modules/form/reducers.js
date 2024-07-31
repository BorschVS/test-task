import {
  SET_FORM_DATA
} from './constants';

const initialState = {
  formData: {},
};

const modal = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: payload
      };
    default:
      return state;
  }
};

export default modal;
