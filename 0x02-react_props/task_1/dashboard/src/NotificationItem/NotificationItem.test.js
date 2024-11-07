import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For additional matchers
import NotificationItem from './NotificationItem'; // Adjust the path if needed

describe('NotificationItem', () => {
  // Test for basic rendering
  test('renders without crashing', () => {
    render(<NotificationItem type="default" value="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  // Test for correct HTML rendering with type and value props
  test('renders correct type and value props', () => {
    render(<NotificationItem type="default" value="Test" />);

    // Verify the type attribute
    const listItem = screen.getByText('Test').closest('li');
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
    expect(listItem).toBeInTheDocument();
  });

  // Test for correct HTML rendering
  test('renders correct HTML from html prop', () => {
    const htmlContent = '<u>Test</u>';
    render(<NotificationItem type="default" html={htmlContent} value="Test" />);

    const spanElement = screen.getByText(/Test/).nextSibling;
    expect(spanElement).toHaveHTML(htmlContent);

  });
});
