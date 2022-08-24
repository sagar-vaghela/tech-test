import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Cart from '../src/containers/Cart/index';
import { useAppDispatch } from '../src/redux/reduxHooks';
import { cartData } from '../__mocks__/resposeMocks';

jest.mock("../src/redux/reduxHooks")

describe('Cart Component', () => {

  const dispatch = jest.fn();

  beforeEach(()=> {
    (useAppDispatch as any).mockImplementation(() => dispatch);
  });

  afterEach(()=> {
    jest.clearAllMocks();
  });

  it('Renders Cart component', () => {
    const { getByTestId } = render(<Cart />);
    const cart = getByTestId('cart');
    expect(cart).toBeInTheDocument();
  });

  it('Renders Cart component call dispatch', () => {
    render(<Cart />);
    expect(useAppDispatch).toHaveBeenCalled();
    // expect(dispatch).toHaveBeenCalledWith({
    //   "type" : 'GET_CARTS_SUCCEEDED',
    //   "payload" : 1,
    // });

  });

});

