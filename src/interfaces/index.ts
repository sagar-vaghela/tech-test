/* eslint-disable @typescript-eslint/no-explicit-any */
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
export interface ratingType {
  count: number;
  rate: number;
}
export interface productType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: ratingType;
  title: string;
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
  };
}
export interface cartData {
  carts: productType[];
  cart: string;
  isLoading: boolean;
  error: string;
}
export interface Carts {
  cartData: cartData;
}
export interface IProduct {
  productData: productDataType;
}

export interface IHeaderProps {
  renderlocation: void;
}

export interface Productspayload {
  productId: string | undefined;
  quantity: number;
}
export interface IAddCart {
  userId: number;
  date: Date;
  products: Productspayload[]
}

export type AppThunk = ThunkAction<void, initialStateType, null, Action<string>>;
