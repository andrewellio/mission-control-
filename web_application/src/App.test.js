import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// This test will always pass
test('Fake test', () => {
  expect(true).toBeTruthy();
})

// Checks there is a link with the name Repository 
test('renders Repository link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Repository/i);
  expect(linkElement).toBeInTheDocument();
});
