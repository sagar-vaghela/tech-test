import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from '../src/containers/Home';

test('Home is rendered correctly', () => {
  render(
    <Router>
      <Home/>
  </Router>
  );
  const heroEle = screen.getByTestId('home');
  expect(heroEle).toBeInTheDocument();
});
