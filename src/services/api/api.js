import { get, post, put, del } from '../fetch';

const handleCatchError = (error) => {
  // Keeping this as it will help to throw Promise.reject error
  throw error;
};

const API_URL = 'https://fakestoreapi.com';

// sample get request
export const getProducts = async (limit) => {
  return get(`${API_URL}/products?limit=${limit}`).catch(handleCatchError);
};
