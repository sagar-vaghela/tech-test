import {
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_STARTED,
    GET_PRODUCTS_SUCCEEDED,
    GET_PRODUCT_DETAILS_FAILED,
    GET_PRODUCT_DETAILS_STARTED,
    GET_PRODUCT_DETAILS_SUCCEEDED
  } from '../lib/constants/actionTypes';
  import initialState from './initialState';
  
  const productReducer = (
    state = initialState.productData,
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case GET_PRODUCTS_STARTED:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case GET_PRODUCTS_SUCCEEDED:
        return {
          ...state,
          products: action.payload,
          isLoading: false
        };
      case GET_PRODUCTS_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
  
      case GET_PRODUCT_DETAILS_STARTED:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case GET_PRODUCT_DETAILS_SUCCEEDED:
        return {
          ...state,
          product: action.payload,
          isLoading: false
        };
      case GET_PRODUCT_DETAILS_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default productReducer;