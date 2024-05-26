import { combineReducers, applyMiddleware } from 'redux';
import bookingReducer from './booking/reducers';
import userReducer from './auth/reducers';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return { ...state, ...action.payload };
    case 'USER_FETCH_FAILED':
      return { ...state, error: action.message };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer: reducer,
  user: userReducer,
  booking: bookingReducer,
});

export default rootReducer;
