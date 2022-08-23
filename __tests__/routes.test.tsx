import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from '../src/routes';

test('Home is rendered correctly', () => {
  render(
    <Router>
      <Routes/>
  </Router>
  );
  const heroEle = screen.getByTestId('routes');
  expect(heroEle).toBeInTheDocument();
});
