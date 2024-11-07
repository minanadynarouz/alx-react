import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

afterEach(() => {
  cleanup();
})

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

  it('Renders component Footer', () => {
    const footerTestId = screen.getByTestId('footer');
    expect(footerTestId).toBeInTheDocument();
  });
});

describe('render based on loggin prop', () => {
  test('Renders component Login if isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);

    const courseTestId = screen.getByTestId('courseList');
    expect(courseTestId).toBeInTheDocument();
  });

  test('Renders component Login if isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);

    const loginTestId = screen.getByTestId('login');
    expect(loginTestId).toBeInTheDocument();
  });
})