import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

const initialState = global.navigator.geolocation;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

jest.mock('react-geolocated', () => {
  return {
    useGeolocated: jest.fn(() => Promise.resolve(initialState))
  };
});

const TestComponent = () => {
  store = mockStore(initialState);
  return (
    < Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>

  );
};


describe('App Component', () => {

  test('App is rendered correctly', () => {
    const { getByTestId } = render(<TestComponent />);
    const app = getByTestId('app');
    expect(app).toBeInTheDocument();
  });


});
