import { ThunkAction } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';

export interface initialStateType {
  productData: productDataType;
  cartData: cartDataType;
}

export interface categoryType {
  createdAt: string;
  name: string;
  id: string;
}

export interface productType {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  price: string;
  category: string;
  description: string;
}

export interface productDataType {
  products: productType[];
  product: any | undefined | null | productType | object;
  isLoading: boolean;
  error: IError | undefined | null;
}

export interface cartDataType {
  carts: productType[];
  cart: any | undefined | null | productType | object;
  isLoading: boolean;
  error: IError | undefined | null;
}

export interface IError {
  name?: string;
  code?: number;
  type?: string;
  status?: number;
  ok?: boolean;
  message?: string;
}

export interface headerParams {
  headers?: {
    Accept?: string;
  }
}
export interface cartData {
  carts: string;
  cart: string;
  isLoading : boolean;
  error: string;
}
export interface Carts {
  cartData : cartData
}


export interface IProduct{
    productData: productDataType
}

export type AppThunk = ThunkAction<void, initialStateType, null, Action<string>>;
