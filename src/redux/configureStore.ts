import { applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { legacy_createStore as createStore } from 'redux';

import rootSaga from './saga';
import { RootState, rootReducer } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type AppDispatch = typeof store.dispatch;

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (
  preloadedState?: Partial<RootState>
): Store<RootState> =>
  createStore(
    rootReducer, // @ts-ignore preloadedState
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

const store: Store<RootState> = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
