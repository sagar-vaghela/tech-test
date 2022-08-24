import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { productData } from '../__mocks__/resposeMocks';
import thunk from 'redux-thunk';
import ProductDetail from '../src/containers/ProductDetail/index';

const initialState = productData;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

const TestComponent = () => {
  store = mockStore(initialState);
  return (
    <Provider store={store}>
      <ProductDetail />
    </Provider>
  );
};

describe('productDetails Component', () => {
  test('Renders productDetails component', async () => {
    const { getByTestId } = render(<TestComponent />);
    const productDetails = getByTestId('productDetail');
    expect(productDetails).toBeInTheDocument();
  });

  test('render add to cart button', async () => {
    localStorage.setItem('cartId', '11');
    const { getByTestId } = render(<TestComponent />);
    const addToCartButton = getByTestId('add-to-cart');
    expect(addToCartButton).toBeInTheDocument();
    fireEvent.click(addToCartButton);
  });

  test('render add to cart button with no cardId', async () => {
    localStorage.removeItem('cartId');
    const { getByTestId } = render(<TestComponent />);
    const addToCartButton = getByTestId('add-to-cart');
    expect(addToCartButton).toBeInTheDocument();
    fireEvent.click(addToCartButton);
  });

  test('render select box', async () => {
    const { getByTestId } = render(<TestComponent />);
    const dropdown = getByTestId('select-box');
    expect(dropdown).toBeTruthy();
    fireEvent.change(dropdown, { target: { value: 'S' } });
  });

  test('render plus minus buttons', async () => {
    const { getByTestId } = render(<TestComponent />);
    const minusButton = getByTestId('minus-button');
    const plusButton = getByTestId('plus-button');
    expect(minusButton).toBeTruthy();
    fireEvent.click(minusButton);
    expect(plusButton).toBeTruthy();
    fireEvent.click(plusButton);
  });
});