import { takeEvery, put, call } from '@redux-saga/core/effects';

import { getSearchId, getFlights } from 'api/index';
import { GET_FLIGHTS } from './constants';
import { setFlights } from './actions';

// Worker
export function* handleAvailableFlights() {
  try {
    const data = yield call(getSearchId);
    const flights = yield call(getFlights, data);
    yield put(setFlights(flights));
    console.log(flights);
  } catch (error) {
    throw new Error(error.message);
  }
}

// Watcher
export function* watchFlightsSaga() {
  yield takeEvery(GET_FLIGHTS, handleAvailableFlights);
}

// Root
export default function* rootSaga() {
  yield watchFlightsSaga();
}
