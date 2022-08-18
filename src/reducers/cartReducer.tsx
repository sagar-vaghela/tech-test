import {
  GET_CARTS_FAILED,
  GET_CARTS_STARTED,
  GET_CARTS_SUCCEEDED
} from '../lib/constants/actionTypes';
import initialState from './initialState';

const cartReducer = (state = initialState.cartData, action: { type: string; payload: object }) => {
  switch (action.type) {
    case GET_CARTS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_CARTS_SUCCEEDED:
      return {
        ...state,
        carts: action.payload,
        isLoading: false
      };
    case GET_CARTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default cartReducer;
