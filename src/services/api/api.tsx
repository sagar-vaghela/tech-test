import { get, post, put, del } from '../fetch';

const handleCatchError = (error: string) => {
  // Keeping this as it will help to throw Promise.reject error
  throw error;
};

const API_URL = 'https://fakestoreapi.com';


export const getProducts = async () => {
  return get(`${API_URL}/products`).catch(handleCatchError);
};
