import {
  SET_IS_SHOWING,
} from './constants';

export const setIsShowing = (payload) => ({
  type: SET_IS_SHOWING,
  payload,
});