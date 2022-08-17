import { combineReducers } from 'redux';
import productData from './productReducer';
import cartData from './cartReducer';

const rootReducer = combineReducers({
  productData,
  cartData
});

export default rootReducer;
