import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ToDo App/i);
  expect(linkElement).toBeInTheDocument();
});
