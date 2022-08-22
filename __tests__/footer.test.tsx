import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer/index';

test('Footer is rendered correctly', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Copyright Tanah Air Studio/i);
  expect(linkElement).toBeInTheDocument();
});