import { all, takeEvery, put } from 'redux-saga/effects'
import userApi from './../../services/userApi'
import actions from './actions'

function* LOGIN({ payload }) {
    yield put({
        type: 'user/SET_STATE',
        payload: {
            loading: true,
        },
    })
    try {
        const response = yield userApi.login(payload)
        if (response && response.data) {
            yield put({
                type: actions.SET_STATE,
                payload: {
                    user: response.data,
                },
            })
            alert("USER LOGGED IN SUCCESSFULLY")
            localStorage.setItem('token', response.data.token)
            window.location.href = '/bookings'
        }
    } catch (error) {
        console.log('error', error)
    }
    yield put({
        type: 'user/SET_STATE',
        payload: {
            loading: false,
        },
    })
}

export function* REGISTER({ payload }) {
    yield put({
        type: 'user/SET_STATE',
        payload: {
            loading: true,
        },
    })
    const response = yield userApi.register(payload)
    if (response && response.status === 'success') {
        window.location.href = '/login'
    }
    else {
        console.log('error', response)
    }
    yield put({
        type: 'user/SET_STATE',
        payload: {
            loading: false,
        },
    })
}


export default function* rootSaga() {
    yield all([
        // User sagas
        takeEvery(actions.LOGIN, LOGIN),
        takeEvery(actions.REGISTER, REGISTER),
    ])
  }