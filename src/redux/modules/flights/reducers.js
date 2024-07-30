import { CHEAP_VALUE, FAST_VALUE } from 'constants/index';
import {
  SET_STOPS_FILTER,
  SET_FLIGHTS,
  SET_ALL_STOPS,
  SET_STOPS_FILTER_STATUS,
  SET_CATEGORY_FILTER,
} from './constants';

const initialState = {
  availableFlights: [],
  filteredFlights: [],
  stopsFilter: [],
  stopsFilterStatus: false,
  flightCategoryFilter: CHEAP_VALUE,
};

const flights = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FLIGHTS:
      return {
        ...state,
        availableFlights: Array.isArray(payload) ? payload.slice()
        .sort((prev, next) => prev.price - next.price) : [],
      };
    case SET_CATEGORY_FILTER:
      if (payload === CHEAP_VALUE) {
        return {
          ...state,
          flightCategoryFilter: payload,
          filteredFlights: state.filteredFlights
            .slice()
            .sort((prev, next) => prev.price - next.price),
          availableFlights: state.availableFlights
            .slice()
            .sort((prev, next) => prev.price - next.price),
        };
      }
      if (payload === FAST_VALUE) {
        return {
          ...state,
          flightCategoryFilter: payload,
          filteredFlights: state.filteredFlights
          .slice()
          .sort(
            (prev, next) =>
              prev.segments[0].duration - next.segments[0].duration
          ),
          availableFlights: state.availableFlights
            .slice()
            .sort(
              (prev, next) =>
                prev.segments[0].duration - next.segments[0].duration
            ),
        };
      }
      return state;
    case SET_STOPS_FILTER:
      return {
        ...state,
        stopsFilter: Array.isArray(payload) ? payload : [],
        filteredFlights: state.availableFlights.filter((flight) =>
          flight.segments.some(
            (segment) =>
              Array.isArray(payload) && payload.includes(segment.stops.length)
          )
        ),
        stopsFilterStatus: false,
      };
    case SET_ALL_STOPS:
      return {
        ...state,
        stopsFilter: [0, 1, 2, 3],
        filteredFlights: state.availableFlights,
        stopsFilterStatus: true,
      };
    case SET_STOPS_FILTER_STATUS:
      return {
        ...state,
        stopsFilterStatus: Boolean(state.stopsFilter.length),
      };
    default:
      return state;
  }
};

export default flights;
