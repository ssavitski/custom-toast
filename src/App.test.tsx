import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header of app', () => {
  render(<App />);
  const headerElement = screen.getByText(/Custom toasts/i);
  expect(headerElement).toBeInTheDocument();
});
