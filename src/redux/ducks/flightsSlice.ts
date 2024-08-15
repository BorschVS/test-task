import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FlightData, FlightsState } from 'types/interfaces';
import { FlightCategory } from 'types/types';

import { FAST_VALUE, CHEAP_VALUE } from '../../constants';

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

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setFlights(state, action: PayloadAction<FlightData[]>) {
      state.availableFlights = action.payload
        .slice()
        .sort((prev, next) => prev.price - next.price);
    },
    setFlightsLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setFlightsError(state, action: PayloadAction<Error | string>) {
      state.error = action.payload;
      state.loading = false;
    },
    setCategoryFilter(state, action: PayloadAction<FlightCategory>) {
      if (action.payload === CHEAP_VALUE) {
        state.flightCategoryFilter = action.payload;
        state.filteredFlights = state.filteredFlights
          .slice()
          .sort((prev, next) => prev.price - next.price);
        state.availableFlights = state.availableFlights
          .slice()
          .sort((prev, next) => prev.price - next.price);
      }
      if (action.payload === FAST_VALUE) {
        state.flightCategoryFilter = action.payload;
        state.filteredFlights = state.filteredFlights
          .slice()
          .sort(
            (prev, next) =>
              prev.segments[0].duration - next.segments[0].duration
          );
        state.availableFlights = state.availableFlights
          .slice()
          .sort(
            (prev, next) =>
              prev.segments[0].duration - next.segments[0].duration
          );
      }
    },
    setStopsFilter(state, action: PayloadAction<number[]>) {
      state.stopsFilter = action.payload;
      state.filteredFlights = state.availableFlights.filter((flight) =>
        flight.segments.some((segment) =>
          action.payload.includes(segment.stops.length)
        )
      );
      state.stopsFilterStatus = false;
    },
    setAllStops(state) {
      state.stopsFilter = [0, 1, 2, 3];
      state.filteredFlights = state.availableFlights;
      state.stopsFilterStatus = true;
    },
    setStopsFilterStatus(state) {
      state.stopsFilterStatus = state.stopsFilter.length > 0;
    },
  },
});

export const {
  setFlights,
  setFlightsLoading,
  setFlightsError,
  setCategoryFilter,
  setStopsFilter,
  setAllStops,
  setStopsFilterStatus,
} = flightsSlice.actions;

export default flightsSlice.reducer;
