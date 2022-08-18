import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCEEDED,
  GET_PRODUCT_DETAILS_FAILED,
  GET_PRODUCT_DETAILS_STARTED,
  GET_PRODUCT_DETAILS_SUCCEEDED,
  SELECT_CATEGORY_STARTED,
  SELECT_CATEGORY_SUCCEEDED,
  SELECT_CATEGORY_FAILED,
  GET_SPECIFIC_PRODUCTS_STARTED,
  GET_SPECIFIC_PRODUCTS_SUCCEEDED,
  GET_SPECIFIC_PRODUCTS_FAILED,
  GET_PRODUCT_SORT_STARTED,
  GET_PRODUCT_SORT_SUCCEEDED,
  GET_PRODUCT_SORT_FAILED,
} from '../lib/constants/actionTypes';
import initialState from './initialState';

const productReducer = (
  state = initialState.productData,
  action: { type: string; payload: object }
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

    case SELECT_CATEGORY_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case SELECT_CATEGORY_SUCCEEDED:
      return {
        ...state,
        product: action.payload,
        isLoading: false
      };
    case SELECT_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case GET_SPECIFIC_PRODUCTS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_SPECIFIC_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };
    case GET_SPECIFIC_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

      case GET_PRODUCT_SORT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_PRODUCT_SORT_SUCCEEDED:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };
    case GET_PRODUCT_SORT_FAILED:
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
