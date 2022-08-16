import { ThunkAction } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';

export type initialStateType = {
  productData: productDataType;
};

export type categoryType = {
  createdAt: string;
  name: string;
  id: string;
};

export type productType = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  price: string;
  category: string;
  description: string;
};

export type productDataType = {
  products: Array<productType>;
  product: any | undefined | null | productType;
  isLoading: boolean;
  error: any | undefined | null;
};

export type AppThunk = ThunkAction<void, initialStateType, null, Action<string>>;