// src/sagas/index.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUser(action) {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://api.example.com/user';
    console.log('fetchUser action', action);
    const response = yield call(axios.get, `https://catfact.ninja/fact`);
    console.log("response", response.data)
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: response.data });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* rootSaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default rootSaga;
