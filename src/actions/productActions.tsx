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
  REMOVE_PRODUCT_SUCCEEDED,
  GET_SPECIFIC_PRODUCTS_STARTED,
  GET_SPECIFIC_PRODUCTS_SUCCEEDED,
  GET_SPECIFIC_PRODUCTS_FAILED,
  SELECT_CATEGORY_STARTED,
  SELECT_CATEGORY_SUCCEEDED,
  SELECT_CATEGORY_FAILED
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

//Get Specific Product
const getSpecificProductsStarted = () => ({
  type: GET_SPECIFIC_PRODUCTS_STARTED
});

const getSpecificProductsSucceeded = (data: any) => ({
  type: GET_SPECIFIC_PRODUCTS_SUCCEEDED,
  payload: data
});

const getSpecificProductsFailed = (error: string) => ({
  type: GET_SPECIFIC_PRODUCTS_FAILED,
  payload: error,
  error: true
});

//Get Categories
const getCategoriesStarted = () => ({
  type: SELECT_CATEGORY_STARTED
});

const getCategoriesSucceeded = (data: any) => ({
  type: SELECT_CATEGORY_SUCCEEDED,
  payload: data
});

const getCategoriesFailed = (error: string) => ({
  type: SELECT_CATEGORY_FAILED,
  payload: error,
  error: true
});

//Get Single Product
const getSingleStarted = () => ({
  type: GET_PRODUCT_DETAILS_STARTED
});

const getSingleSucceeded = (data: any) => ({
  type: GET_PRODUCT_DETAILS_SUCCEEDED,
  payload: data
});

const getSingleFailed = (error: string) => ({
  type: GET_PRODUCT_DETAILS_FAILED,
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

export const getSpecificProducts =
  (product: string): any =>
  async (dispatch: any) => {
    dispatch(getSpecificProductsStarted());
    await ProductService.getSpecificProducts(product)
      .then((res) => {
        dispatch(getSpecificProductsSucceeded(res));
      })
      .catch((error) => {
        dispatch(getSpecificProductsFailed('error.response'));
      });
  };

export const getCategories = (): any => async (dispatch: any) => {
  dispatch(getCategoriesStarted());
  await ProductService.getCategories()
    .then((res) => {
      dispatch(getCategoriesSucceeded(res));
    })
    .catch((error) => {
      dispatch(getCategoriesFailed('error.response'));
    });
};

export const getSingleProduct =
  (id: number): any =>
  async (dispatch: any) => {
    dispatch(getSingleStarted());
    await ProductService.getSingleProduct(id)
      .then((res) => {
        dispatch(getSingleSucceeded(res));
      })
      .catch((error) => {
        dispatch(getSingleFailed('error.response'));
      });
  };
