import { Routes, Route } from 'react-router-dom';
import { Cart, Home, ProductDetail, Products } from '../containers';
import {
  CART_ROUTE,
  PRODUCTS_ROUTE,
  ROOT_ROUTE,
  PRODUCT_DETAILS_ROUTE
} from '../lib/constants/routes';

function ShoppingRoutes() {
  return (
    <Routes>
      <Route path={ROOT_ROUTE} element={<Home />} />
      <Route path={PRODUCTS_ROUTE} element={<Products data={[]} />} />
      <Route path={PRODUCT_DETAILS_ROUTE} element={<ProductDetail />} />
      <Route path={CART_ROUTE} element={<Cart />} />
    </Routes>
  );
}

export default ShoppingRoutes;
