import {
  GET_FLIGHTS,
  SET_FLIGHTS,
  SET_STOPS_FILTER,
  SET_ALL_STOPS,
} from './constants';

export const getFlights = () => ({
  type: GET_FLIGHTS,
});

export const setFlights = (payload) => ({
  type: SET_FLIGHTS,
  payload,
});

export const setStopsFilter = (payload) => ({
  type: SET_STOPS_FILTER,
  payload,
});

export const setAllStops = () => ({
  type: SET_ALL_STOPS,
});
