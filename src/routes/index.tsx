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
    <div data-testid="routes">
    <Routes>
      <Route path={ROOT_ROUTE} element={<Home />} />
      <Route path={PRODUCTS_ROUTE} element={<Products />} />
      <Route path={PRODUCT_DETAILS_ROUTE} element={<ProductDetail />} />
      <Route path={CART_ROUTE} element={<Cart />} />
    </Routes>
    </div>
  );
}

export default ShoppingRoutes;
