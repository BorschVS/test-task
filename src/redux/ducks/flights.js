import { takeEvery, put, call } from '@redux-saga/core/effects';

import { FAST_VALUE, CHEAP_VALUE } from 'constants';
import { getSearchId, getFlightsData } from 'api';

const GET_FLIGHTS = 'GET_FLIGHTS';
const SET_FLIGHTS = 'SET_FLIGHTS';
const SET_FLIGHTS_LOADING = 'SET_FLIGHTS_LOADING';
const SET_FLIGHTS_ERROR = 'SET_FLIGHTS_ERROR';
const SET_STOPS_FILTER = 'SET_STOPS_FILTER';
const SET_ALL_STOPS = 'SET_ALL_STOPS';
const SET_STOPS_FILTER_STATUS = 'SET_STOPS_FILTER_STATUS';
const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

const initialState = {
    availableFlights: [],
    filteredFlights: [],
    stopsFilter: [],
    stopsFilterStatus: false,
    flightCategoryFilter: CHEAP_VALUE,
    loading: false,
    error: null
};

export const flights = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FLIGHTS:
            return {
                ...state,
                availableFlights: Array.isArray(payload) ? payload.slice()
                    .sort((prev, next) => prev.price - next.price) : [],
            };
        case SET_FLIGHTS_LOADING:
            return {
                ...state,
                loading: payload
            };
        case SET_FLIGHTS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
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

export const getFlights = () => ({
    type: GET_FLIGHTS,
});

export const setFlights = (payload) => ({
    type: SET_FLIGHTS,
    payload,
});

export const setFlightsLoading = (payload) => {
    return {
        type: SET_FLIGHTS_LOADING,
        payload
    };
}

export const setFlightsError = (payload) => {
    return {
        type: SET_FLIGHTS_ERROR,
        payload
    };
}

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

// saga

// Worker
export function* handleAvailableFlights() {
    try {
        yield put(setFlightsLoading(true));

        const searchId = yield call(getSearchId);
        const flights = yield call(getFlightsData, searchId);

        yield put(setFlights(flights));
        yield put(setFlightsLoading(false));

    } catch (error) {
        yield put(setFlightsError(error.message));
        yield put(setFlightsLoading(false));
    }
}

// Watcher
export function* watchFlightsSaga() {
    yield takeEvery(GET_FLIGHTS, handleAvailableFlights);
}