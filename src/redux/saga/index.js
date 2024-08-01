import { all } from 'redux-saga/effects';
import { watchFlightsSaga } from '../ducks/flights';
import { watchImagesSaga } from '../ducks/images';
// Root
export default function* rootSaga() {
  yield all([watchFlightsSaga(), watchImagesSaga()]);
}
