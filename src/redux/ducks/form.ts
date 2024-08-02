import { FormState, SetFormDataAction } from 'interfaces';
import { FormActions } from 'types';

export const SET_FORM_DATA = 'SET_FORM_DATA';

const initialState: FormState = {
  formData: '',
};

export const formReducer = (state = initialState, action: FormActions) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: JSON.stringify(action.payload, null, 2),
      };
    default:
      return state;
  }
};

export const setFormData = (payload: string): SetFormDataAction => ({
  type: SET_FORM_DATA,
  payload,
});
