import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../src/App';
import { Provider } from 'react-redux';
import {createStore} from "redux";


test('App is rendered correctly', () => {

  render(
    <Router>
      <App />
      </Router>
  );
  const appEle = screen.getByTestId('app');
  expect(appEle).toBeInTheDocument();
});
