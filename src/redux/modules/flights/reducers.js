import { SET_STOPS_FILTER, SET_FLIGHTS, SET_ALL_STOPS } from './constants';

const initialState = {
  availableFlights: [],
  stopsFilter: [],
};

const flights = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FLIGHTS:
      return {
        ...state,
        availableFlights: [...payload],
      };
    case SET_STOPS_FILTER:
      return {
        ...state,
        stopsFilter: payload,
        filteredFlights: state.availableFlights.filter((flight) =>
          flight.segments.every((segment) =>
            payload.includes(segment.stops.length)
          )
        ),
      };
    case SET_ALL_STOPS:
      return {
        ...state,
        stopsFilter: [0, 1, 2, 3],
        filteredFlights: state.availableFlights,
      };
    default:
      return state;
  }
};

export default flights;
