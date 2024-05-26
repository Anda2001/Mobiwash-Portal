import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'


export default function Bookings() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'booking/GET_BOOKINGS' })
    }, [])

    return (
        <div>
        <h1>Bookings</h1>

        </div>
    );
    }