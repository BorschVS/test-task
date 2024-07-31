import {
  SET_CURRENT_FLIGHT,
  SET_IS_SHOWING,
} from './constants';

export const setIsShowing = (payload) => ({
  type: SET_IS_SHOWING,
  payload,
});

export const setCurrentFlight = (payload) => ({
type: SET_CURRENT_FLIGHT,
payload,
})