import { all, takeEvery } from 'redux-saga/effects'
import { notification } from 'antd'
import * as bookingService from 'services/bookingsApi'

import actions from './actions'

export function* GET_BOOKINGS({ payload }) {
    yield put({
        type: 'booking/SET_STATE',
        payload: {
            loading: true,
        },
    })
    const { params } = payload
    const response = yield bookingService.getBookings(params)
    if (response && response.data) {
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
        takeEvery(actions.GET_BOOKINGS, getBookings),
    ])
  }