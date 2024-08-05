import { takeEvery, put, call } from '@redux-saga/core/effects';

import { FAST_VALUE, CHEAP_VALUE } from '../../constants';
import { getSearchId, getFlightsData } from 'api';
import {
  FlightData,
  FlightsState,
  GetFlightsAction,
  SetFlightsAction,
  SetFlightsLoadingAction,
  SetStopsFilterAction,
} from 'types/interfaces';
import { FlightsActions, FlightCategory } from 'types/types';

export const GET_FLIGHTS = 'GET_FLIGHTS';
export const SET_FLIGHTS = 'SET_FLIGHTS';
export const SET_FLIGHTS_LOADING = 'SET_FLIGHTS_LOADING';
export const SET_FLIGHTS_ERROR = 'SET_FLIGHTS_ERROR';
export const SET_STOPS_FILTER = 'SET_STOPS_FILTER';
export const SET_ALL_STOPS = 'SET_ALL_STOPS';
export const SET_STOPS_FILTER_STATUS = 'SET_STOPS_FILTER_STATUS';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

const initialState: FlightsState = {
  availableFlights: [],
  filteredFlights: [],
  stopsFilter: [],
  stopsFilterStatus: false,
  flightCategoryFilter: CHEAP_VALUE,
  loading: false,
  error: null,
};

export const flights = (state = initialState, action: FlightsActions) => {
  switch (action.type) {
    case SET_FLIGHTS:
      return {
        ...state,
        availableFlights: Array.isArray(action.payload)
          ? action.payload.slice().sort((prev, next) => prev.price - next.price)
          : [],
      };
    case SET_FLIGHTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_FLIGHTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_CATEGORY_FILTER:
      if (action.payload === CHEAP_VALUE) {
        return {
          ...state,
          flightCategoryFilter: action.payload,
          filteredFlights: state.filteredFlights
            .slice()
            .sort((prev, next) => prev.price - next.price),
          availableFlights: state.availableFlights
            .slice()
            .sort((prev, next) => prev.price - next.price),
        };
      }
      if (action.payload === FAST_VALUE) {
        return {
          ...state,
          flightCategoryFilter: action.payload,
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
        stopsFilter: Array.isArray(action.payload) ? action.payload : [],
        filteredFlights: state.availableFlights.filter((flight) =>
          flight.segments.some(
            (segment) =>
              Array.isArray(action.payload) &&
              action.payload.includes(segment.stops.length)
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

export const getFlights = () => ({
  type: GET_FLIGHTS,
});

export const setFlights = (payload: FlightData[]): SetFlightsAction => ({
  type: SET_FLIGHTS,
  payload,
});

export const setFlightsLoading = (
  payload: boolean
): SetFlightsLoadingAction => {
  return {
    type: SET_FLIGHTS_LOADING,
    payload,
  };
};

export const setFlightsError = (payload: Error) => {
  return {
    type: SET_FLIGHTS_ERROR,
    payload,
  };
};

export const setStopsFilter = (payload: string[]) => ({
  type: SET_STOPS_FILTER,
  payload,
});

export const setStopsFilterStatus = () => ({
  type: SET_STOPS_FILTER_STATUS,
});

export const setAllStops = () => ({
  type: SET_ALL_STOPS,
});

export const setCategoryFilter = (payload: FlightCategory) => ({
  type: SET_CATEGORY_FILTER,
  payload,
});

// saga

// Worker
export function* handleAvailableFlights() {
  try {
    yield put(setFlightsLoading(true));

    const searchId: string = yield call(getSearchId);
    const flights: FlightData[] = yield call(getFlightsData, searchId);

    yield put(setFlights(flights));
    yield put(setFlightsLoading(false));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(setFlightsError(error));
    }
    yield put(setFlightsLoading(false));
  }
}

// Watcher
export function* watchFlightsSaga(): Generator<
  ReturnType<typeof takeEvery>,
  void,
  never
> {
  yield takeEvery(GET_FLIGHTS, handleAvailableFlights);
}
