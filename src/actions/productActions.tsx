import { AppThunk } from '../interfaces';
import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCEEDED,
  GET_PRODUCT_DETAILS_FAILED,
  GET_PRODUCT_DETAILS_STARTED,
  GET_PRODUCT_DETAILS_SUCCEEDED,
  REMOVE_PRODUCT_FAILED,
  REMOVE_PRODUCT_STARTED,
  REMOVE_PRODUCT_SUCCEEDED
} from '../lib/constants/actionTypes';
import * as ProductService from '../services/api';

// Get Product
const getProductsStarted = () => ({
  type: GET_PRODUCTS_STARTED
});

const getProductsSucceeded = (data: any) => ({
  type: GET_PRODUCTS_SUCCEEDED,
  payload: data
});

const getProductsFailed = (error: string) => ({
  type: GET_PRODUCTS_FAILED,
  payload: error,
  error: true
});

export const getProducts = (): any => async (dispatch: any) => {
  dispatch(getProductsStarted());
  await ProductService.getProducts()
    .then((res) => {
      dispatch(getProductsSucceeded(res));
    })
    .catch((error) => {
      dispatch(getProductsFailed('error.response'));
    });
};
