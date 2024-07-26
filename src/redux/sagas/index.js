import { all } from 'redux-saga/effects';
import flightsSaga from '../modules/flights/sagas';

export default function* rootSaga() {
  yield all([flightsSaga()]);
}
