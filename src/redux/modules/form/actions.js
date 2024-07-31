import {
  SET_FORM_DATA,
} from './constants';

export const setFormData = (payload) => ({
type: SET_FORM_DATA,
payload,
})