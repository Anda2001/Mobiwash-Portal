import { all, takeEvery, put } from 'redux-saga/effects'
import bookingsApi from './../../services/bookingsApi'

import actions from './actions'

export function* GET_BOOKINGS() {
    yield put({
        type: 'booking/SET_STATE',
        payload: {
            loading: true,
        },
    })
    const response = yield bookingsApi.getBookings()
    console.log("BOOKING response", response)
    if (response && response.status === 'success') {
        yield put({
            type: 'booking/SET_STATE',
            payload: {
                bookings: response.data,
            },
        })
    }
    yield put({
        type: 'booking/SET_STATE',
        payload: {
            loading: false,
        },
    })
}

export function* GET_COUNT_BOOKINGS() {
    yield put({
        type: 'booking/SET_STATE',
        payload: {
            loading: true,
        },
    })
    const response = yield bookingsApi.getCountBookings()
    console.log("BOOKING COUNT response", response)
    if (response && response.status === 'success') {
        yield put({
            type: 'booking/SET_STATE',
            payload: {
                countBookings: response.data,
            },
        })
    }
    yield put({
        type: 'booking/SET_STATE',
        payload: {
            loading: false,
        },
    })
}


export default function* rootSaga() {
    yield all([
        // Booking sagas
        takeEvery(actions.GET_BOOKINGS, GET_BOOKINGS),
        takeEvery(actions.GET_COUNT_BOOKINGS, GET_COUNT_BOOKINGS),
    ])
  }