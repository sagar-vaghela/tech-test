import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Header from '../src/components/Header/index';
import {BrowserRouter as Router} from 'react-router-dom';

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
})

const TestComponent = () => {
  return <Header />;
};

describe("Header Component" ,() => {
  render(
    <Router>
    <TestComponent/>
    </Router>
  ); 
  const headerEle = screen.getByTestId("header"); 
    
  // Test 1
  test("Header Rendering", () => {
      expect(headerEle).toBeInTheDocument(); 
  })

});
