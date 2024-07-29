import {
  GET_FLIGHTS,
  SET_FLIGHTS,
  SET_STOPS_FILTER,
  SET_ALL_STOPS,
  SET_STOPS_FILTER_STATUS,
  SET_CATEGORY_FILTER,
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

export const setStopsFilterStatus = () => ({
  type: SET_STOPS_FILTER_STATUS,
});

export const setAllStops = () => ({
  type: SET_ALL_STOPS,
});

export const setCategoryFilter = (payload) => ({
  type: SET_CATEGORY_FILTER,
  payload,
});
