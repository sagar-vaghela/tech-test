import { IAddCart } from '../interfaces';
import {
  ADD_CART_STARTED,
  ADD_CART_SUCCEEDED,
  ADD_CART_FAILED,
  UPDATE_CART_STARTED,
  UPDATE_CART_SUCCEEDED,
  UPDATE_CART_FAILED,
  GET_CARTS_STARTED,
  GET_CARTS_SUCCEEDED,
  GET_CARTS_FAILED
} from '../lib/constants/actionTypes';
import * as ProductService from '../services/api';

//Add to Cart
const addCartStarted = () => ({
  type: ADD_CART_STARTED
});

const addCartSucceeded = (data: IAddCart) => ({
  type: ADD_CART_SUCCEEDED,
  payload: data
});

const addCartFailed = (error: string) => ({
  type: ADD_CART_FAILED,
  payload: error,
  error: true
});

export const addCart =
  (payload: IAddCart): any =>
  async (
    dispatch: (arg0: { type: string; payload?: string | IAddCart; error?: boolean }) => void
  ) => {
    dispatch(addCartStarted());
    await ProductService.addCart(payload)
      .then((res) => {
        localStorage.setItem('cartId', res.id);
        dispatch(addCartSucceeded(res));
      })
      .catch(() => {
        dispatch(addCartFailed('error.response'));
      });
  };

//update to Cart
const updateCartStarted = () => ({
  type: UPDATE_CART_STARTED
});

const updateCartSucceeded = (data: IAddCart) => ({
  type: UPDATE_CART_SUCCEEDED,
  payload: data
});

const updateCartFailed = (error: string) => ({
  type: UPDATE_CART_FAILED,
  payload: error,
  error: true
});

export const updateCart =
  (cartId: string | number, payload: IAddCart): any =>
  async (dispatch: any) => {
    dispatch(updateCartStarted());
    await ProductService.updateCart(cartId, payload)
      .then((res) => {
        dispatch(updateCartSucceeded(res));
      })
      .catch(() => {
        dispatch(updateCartFailed('error.response'));
      });
  };

//get to Carts
const getCartsStarted = () => ({
  type: GET_CARTS_STARTED
});

const getCartsSucceeded = (data: string) => ({
  type: GET_CARTS_SUCCEEDED,
  payload: data
});

const getCartsFailed = (error: string) => ({
  type: GET_CARTS_FAILED,
  payload: error,
  error: true
});

export const getCarts =
  (cartId: string | number): any =>
  async (dispatch: any) => {
    dispatch(getCartsStarted());
    await ProductService.getCarts(cartId)
      .then((res) => {
        console.log('res', res);

        dispatch(getCartsSucceeded(res));
      })
      .catch(() => {
        dispatch(getCartsFailed('error.response'));
      });
  };
