import React from 'react';
import { render, screen } from '@testing-library/react';
import ReducerI from './components/ReducerI';

test('renders learn react link', () => {
  render(<ReducerI />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
