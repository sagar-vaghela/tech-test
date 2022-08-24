import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
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


  const renderComponent = () => render(<TestComponent />);

  let originFetch : any;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });

  it('Renders ProductDetails component', async () => {

    act(() => {
      const mRes = { json: jest.fn().mockResolvedValueOnce(initialState) };
      const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
      (global as any).fetch = mockedFetch;
    })

    const { getByTestId } = renderComponent();

    waitFor(() => {
      expect(getByTestId('productDetail')).toBeInTheDocument();
    });
  });

});

