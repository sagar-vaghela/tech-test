/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCEEDED,
  GET_PRODUCT_DETAILS_FAILED,
  GET_PRODUCT_DETAILS_STARTED,
  GET_PRODUCT_DETAILS_SUCCEEDED,
  GET_SPECIFIC_PRODUCTS_STARTED,
  GET_SPECIFIC_PRODUCTS_SUCCEEDED,
  GET_SPECIFIC_PRODUCTS_FAILED,
  SELECT_CATEGORY_STARTED,
  SELECT_CATEGORY_SUCCEEDED,
  SELECT_CATEGORY_FAILED,
  GET_PRODUCT_SORT_STARTED,
  GET_PRODUCT_SORT_SUCCEEDED,
  GET_PRODUCT_SORT_FAILED,
} from '../lib/constants/actionTypes';
import * as ProductService from '../services/api';

// Get Product
const getProductsStarted = () => ({
  type: GET_PRODUCTS_STARTED
});

const getProductsSucceeded = (data: object) => ({
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
    .catch(() => {
      dispatch(getProductsFailed('error.response'));
    });
};

//Get Specific Product
const getSpecificProductsStarted = () => ({
  type: GET_SPECIFIC_PRODUCTS_STARTED
});

const getSpecificProductsSucceeded = (data: object) => ({
  type: GET_SPECIFIC_PRODUCTS_SUCCEEDED,
  payload: data
});

const getSpecificProductsFailed = (error: string) => ({
  type: GET_SPECIFIC_PRODUCTS_FAILED,
  payload: error,
  error: true
});

export const getSpecificProducts =
  (product: string): any =>
  async (dispatch: any) => {
    dispatch(getSpecificProductsStarted());
    await ProductService.getSpecificProducts(product)
      .then((res) => {
        dispatch(getSpecificProductsSucceeded(res));
      })
      .catch(() => {
        dispatch(getSpecificProductsFailed('error.response'));
      });
  };

//Get Categories
const getCategoriesStarted = () => ({
  type: SELECT_CATEGORY_STARTED
});

const getCategoriesSucceeded = (data: object) => ({
  type: SELECT_CATEGORY_SUCCEEDED,
  payload: data
});

const getCategoriesFailed = (error: string) => ({
  type: SELECT_CATEGORY_FAILED,
  payload: error,
  error: true
});

export const getCategories = (): any => async (dispatch: any) => {
  dispatch(getCategoriesStarted());
  await ProductService.getCategories()
    .then((res) => {
      dispatch(getCategoriesSucceeded(res));
    })
    .catch(() => {
      dispatch(getCategoriesFailed('error.response'));
    });
};

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

export const getSingleProduct =
  (id: string | undefined): any =>
  async (dispatch: any) => {
    dispatch(getSingleStarted());
    await ProductService.getSingleProduct(id)
      .then((res) => {
        dispatch(getSingleSucceeded(res));
      })
      .catch(() => {
        dispatch(getSingleFailed('error.response'));
      });
  };

//Get Product Sorting
const getProductSortStarted = () => ({
  type: GET_PRODUCT_SORT_STARTED
});

const getProductSortSucceeded = (data: any) => ({
  type: GET_PRODUCT_SORT_SUCCEEDED,
  payload: data
});

const getProductSortFailed = (error: string) => ({
  type: GET_PRODUCT_SORT_FAILED,
  payload: error,
  error: true
});

  export const getProductSortProduct =
  (sort: string): any =>
  async (dispatch: any) => {
    dispatch(getProductSortStarted());
    await ProductService.getProductSortProduct(sort)
      .then((res) => {
        dispatch(getProductSortSucceeded(res));
      })
      .catch(() => {
        dispatch(getProductSortFailed('error.response'));
      });
  };
