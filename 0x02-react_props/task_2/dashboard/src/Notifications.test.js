import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Render notifications component', () => {
  it('<Notifications /> render without crashing', () => {
    render(<Notifications />);
  });

  it('render three list items', () => {
    const { container } = render(<Notifications />);
    const notificationItems = container.querySelectorAll('[data-notification-type]');
    expect(notificationItems).toHaveLength(3);
  });
  it('render specific text', () => {
    render(<Notifications />);
    const checkText = screen.getByText(/Here is the list of notifications/i);
    expect(checkText).toBeInTheDocument();
  });

  it('Render with correct HTML', () => {
    const { container } = render(<Notifications />);
    const first_li = container.querySelector('[data-notification-type]');
    expect(first_li).toHaveTextContent('New course available');
  })
});