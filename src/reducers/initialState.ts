import { initialStateType } from '../interfaces';

const initialState: initialStateType = {
  productData: {
    products: [],
    product: [],
    isLoading: false,
    error: null
  }
};

export default initialState;
