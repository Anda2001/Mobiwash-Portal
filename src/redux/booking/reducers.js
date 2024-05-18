import actions from './actions';

const initialState = {
    bookings: [],
    loading: false,
};

export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_STATE:
            return { ...state, ...action.payload };
        case actions.RESET_STATE:
            return { ...initialState, ...action.payload }
        default:
            return state;
    }
}