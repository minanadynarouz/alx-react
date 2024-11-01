import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('App component', () => {
  it('Renders component without errors', () => {
    render(<App />);
  });

  it('render a div with class App-header', () => {
    render(<App />);
    const headerDiv = screen.getByRole('heading', { name: /School dashboard/i }).closest('div');

    expect(headerDiv).toHaveClass('App-header');
  });

  it('render a div with class App-body', () => {
    render(<App />);
    const bodyDiv = screen.getByText(/Login to access the full dashboard/i).closest('div');

    expect(bodyDiv).toHaveClass('App-body');
  });

  it('render a div with class App-footer', () => {
    render(<App />);
    const footerDiv = screen.getByText(/copyright/i).closest('div');
    expect(footerDiv).toHaveClass('App-footer');
  });
});