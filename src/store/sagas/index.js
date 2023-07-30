// sagas.js
import { takeEvery, call, put } from 'redux-saga/effects';
import { succeed, failed } from '../reducers/apiSlice';
import { setMessage } from '../reducers/toastSlice';
import fetcher from 'lib/fetcher';
 export default function* sagas() {
  yield takeEvery(({ payload: { operationId = null } }) => {
    return operationId !== null && typeof operationId === 'string' && operationId.length > 0;
  }, performApiAction);
}
 function* performApiAction(action) {
  const {
    payload: { output = 'output', operationId = '', parameters = {} },
  } = action;
   try {
    let response = yield call(() => fetcher(operationId, parameters));
    console.log('saga response -> ', response);
     yield put(succeed({ response, output }));
     if (parameters.method) {
      const successMessage = 'Operation has been completed successfully.';
      yield put(setMessage({ type: 'success', message: successMessage }));
    }
  } catch (error) {
    let err = error.response
      ? error.response.obj.error
      : { message: 'Api call failed or check your internet connection' };
     yield put(failed({ error: err }));
    yield put(setMessage({ type: 'error', message: err.message }));
  }
}