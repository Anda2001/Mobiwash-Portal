// src/reducers/index.js
import { combineReducers } from 'redux';

// Example of a simple reducer
const userReducer = (state = {}, action) => {
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
  user: userReducer
});

export default rootReducer;
