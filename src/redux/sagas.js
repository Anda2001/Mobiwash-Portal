import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import booking from './booking/sagas';

function* fetchUser(action) {
  try {
    const response = yield call(axios.get, `https://catfact.ninja/fact`);
    console.log("response", response.data)
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: response.data });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watchFetchUser() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

function* rootSaga() {
  yield all([
    watchFetchUser(),
    booking()
  ]);
}

export default rootSaga;
