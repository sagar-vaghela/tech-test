import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Cart from '../src/containers/Cart/index';

test('Cart is rendered correctly', () => {
  render(
    <Router>
      <Cart/>
  </Router>
  );
  const heroEle = screen.getByTestId('cart');
  expect(heroEle).toBeInTheDocument();
});