import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ProductDetail from '../src/containers/ProductDetail/index';
import { productDetail } from '../__mocks__/resposeMocks';


const initialState = productDetail;
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

describe('ProductDeatils Component', () => {
  test('Renders ProductDetails component', async () => {

    const { getByTestId } = render(<TestComponent />);
    const cart = getByTestId('productDetail');
    expect(cart).toBeInTheDocument();
  });

});

