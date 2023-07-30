// third-party
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
// project import
import reducers from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false
  }),
  sagaMiddleware
];
const store = configureStore({
  reducer: reducers,
  middleware
});

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;
sagaMiddleware.run(sagas);
export { store, dispatch, useSelector, useDispatch };
