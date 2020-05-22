import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Mission Control title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Mission Control/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Repository link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Repository/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a template text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/A template/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Mission-Control-System inline code', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Mission-Control-System/i);
  expect(linkElement).toBeInTheDocument();
});
