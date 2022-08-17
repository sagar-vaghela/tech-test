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
  GET_ALL_CATEGORIES_STARTED,
  GET_ALL_CATEGORIES_SUCCEEDED,
  GET_ALL_CATEGORIES_FAILED,

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

//Get All Categories
const getAllCategoriesStarted = () => ({
  type: GET_ALL_CATEGORIES_STARTED
});

const getAllCategoriesSucceeded = (data: any) => ({
  type: GET_ALL_CATEGORIES_SUCCEEDED,
  payload: data
});

const getAllCategoriesFailed = (error: string) => ({
  type: GET_ALL_CATEGORIES_FAILED,
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


export const getSpecificProducts = (product: string): any => async (dispatch: any) => {
  dispatch(getSpecificProductsStarted());
  await ProductService.getSpecificProducts(product)
    .then((res) => {
      dispatch(getSpecificProductsSucceeded(res));
    })
    .catch((error) => {
      dispatch(getSpecificProductsFailed('error.response'));
    });
};

export const getAllCategories = (): any => async (dispatch: any) => {
  dispatch(getAllCategoriesStarted());
  await ProductService.getAllCategories()
    .then((res) => {
      dispatch(getAllCategoriesSucceeded(res));
    })
    .catch((error) => {
      dispatch(getAllCategoriesFailed('error.response'));
    });
};

