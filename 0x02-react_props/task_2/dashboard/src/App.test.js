import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Renders component Notifications', () => {
    const notificationsTestId = screen.getByTestId('notifications');
    expect(notificationsTestId).toBeInTheDocument();
  });

  it('Renders component Header', () => {
    const headerTestId = screen.getByTestId('header');
    expect(headerTestId).toBeInTheDocument();
  });

  it('Renders component Login', () => {
    const loginTestId = screen.getByTestId('login');
    expect(loginTestId).toBeInTheDocument();
  });

  it('Renders component Footer', () => {
    const footerTestId = screen.getByTestId('footer');
    expect(footerTestId).toBeInTheDocument();
  });
});