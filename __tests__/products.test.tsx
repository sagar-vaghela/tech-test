import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../src/containers/Cart/index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { getCarts } from '../src/services/api';
import { cartData, productData } from '../__mocks__/resposeMocks';
import thunk from 'redux-thunk';
import Products from '../src/containers/Products/index';


const initialState = productData;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

const TestComponent = () => {
  store = mockStore(initialState);
  return (
    <Provider store={store}>
    <Products />
    </Provider>
  );
};

describe('Cart Component', () => {
  test('Renders Cart component', async () => {

    const { getByTestId } = render(<TestComponent />);
    const cart = getByTestId('products');
    expect(cart).toBeInTheDocument();
  });

});

