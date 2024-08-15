import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import { getSearchId, getFlightsData } from 'api';

import { FlightData } from 'types/interfaces';

import {
  setFlights,
  setFlightsLoading,
  setFlightsError,
  GET_FLIGHTS,
} from './ducks/flightsSlice';
import {
  getImageSuccess,
  getImageFailure,
  GET_IMAGE_REQUEST,
} from './ducks/imagesSlice';

function* handleAvailableFlights() {
  try {
    yield put(setFlightsLoading(true));
    const searchId: string = yield call(getSearchId);
    const flights: FlightData[] = yield call(getFlightsData, searchId);
    yield put(setFlights(flights));
  } catch (error) {
    yield put(
      setFlightsError(error instanceof Error ? error.message : 'Unknown error')
    );
  } finally {
    yield put(setFlightsLoading(false));
  }
}

function* getImage(action: PayloadAction<string>) {
  try {
    const imageUrl = `/images/${action.payload}`;
    const response: Response = yield call(fetch, imageUrl);
    if (!response.ok) {
      throw new Error('Response was not ok');
    }
    yield put(getImageSuccess({ imageName: action.payload, imageUrl }));
  } catch (error) {
    yield put(
      getImageFailure(error instanceof Error ? error.message : 'Unknown error')
    );
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(GET_FLIGHTS, handleAvailableFlights),
    takeEvery(GET_IMAGE_REQUEST, getImage),
  ]);
}
