import { all, takeEvery, put } from 'redux-saga/effects'
import bookingsApi from './../../services/bookingsApi'

import actions from './actions'

export function* GET_BOOKINGS({ payload }) {
    yield put({
        type: 'booking/SET_STATE',
        payload: {
            loading: true,
        },
    })
    const { params } = payload
    const response = yield bookingsApi.getBookings(params)
    console.log("response", response)
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

export default function* rootSaga() {
    yield all([
        // Booking sagas
        takeEvery(actions.GET_BOOKINGS, GET_BOOKINGS),
    ])
  }