import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUser(action) {
  try {
    const response = yield call(axios.get, `https://catfact.ninja/fact`);
    console.log("response", response.data)
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: response.data });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* rootSaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
  console.log('fetchUser cats', action);

}

export default rootSaga;
