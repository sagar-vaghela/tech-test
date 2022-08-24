import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Cart from '../src/containers/Cart/index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { getCarts } from '../src/services/api';
import { cartDummyData } from '../__mocks__/resposeMocks';
import thunk from 'redux-thunk';

const initialState = cartDummyData;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

// jest.mock('../src/services/api/api.tsx', () => {
//   const api = jest.requireActual('../src/services/api/api.tsx');

//   return {
//     ...api,
//     getCarts: jest.fn(),
//   };
// });
// jest.setTimeout(10000);

// (getCarts as any).mockImplementation(() => {
//   return new Promise((resolve) => {
//     resolve(cartData);
//   });
// });

jest.mock('../src/services/api', () => {
  const users = initialState;
  return {
    getCarts: jest.fn(() => Promise.resolve(users))
  };
});

const TestComponent = () => {
  store = mockStore(initialState);
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

describe('Cart Component', () => {
  test('Renders Cart component', async () => {
    localStorage.setItem('cartId', '11');
    const { getByTestId } = render(<TestComponent />);
    const cart = getByTestId('cart');
    await expect(cart).toBeInTheDocument();
  });

  test('Renders Cart component there is no cardId', async () => {
    localStorage.removeItem('cartId');
    const { getByTestId } = render(<TestComponent />);
    const cart = getByTestId('cart');
    await expect(cart).toBeInTheDocument();
  });
});