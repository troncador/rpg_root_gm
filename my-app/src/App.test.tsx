import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {  } from "bootstrap";

test('renders learn react link', () => {
  render(<App name="a"/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
