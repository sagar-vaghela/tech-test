import { get, post, put, del } from '../fetch';

const handleCatchError = (error: string) => {
  // Keeping this as it will help to throw Promise.reject error
  throw error;
};

const API_URL = 'https://fakestoreapi.com';


export const getProducts = async () => {
  return get(`${API_URL}/products`).catch(handleCatchError);
};

export const getSpecificProducts = async (product:string) => {
  return get(`${API_URL}/products/category/${product}`).catch(handleCatchError);
};

export const getAllCategories = async () => {
  return get(`${API_URL}/products/categories`).catch(handleCatchError);
};

export const getSingleProduct = async (id:number) => {
  return get(`${API_URL}/products/${id}`).catch(handleCatchError);
};

