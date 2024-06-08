import { all, takeEvery, put } from 'redux-saga/effects'
import userApi from './../../services/userApi'
import actions from './actions'
import { redirect } from 'react-router-dom'

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
            //take token from local storage
            localStorage.setItem('token', response.data.token)
            //redirect to home page
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
    console.log("payload", payload)
    const response = yield userApi.register(payload)
    console.log("response", response)
    if (response && response.status === 'success') {
        console.log("USER REGISTERED SUCCESSFULLY")
        // yield put({
        //     type: 'users/SET_STATE',
        //     payload: {
        //         user: response?.data?.token || "AAAAAAA",
        //     },
        // })
        // //redirect to home page
        // yield call(history.push, {
        //     pathname: `/` || '',
        //     state: history.location && history.location.state,
        //   })

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