import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Render notifications component', () => {
  it('<Notifications /> render without crashing', () => {
    render(<Notifications />);
  });

  it('render three list items', () => {
    render(<Notifications />);
    const listitems = screen.getAllByRole('listitem');
    expect(listitems).toHaveLength(3);
  });
  it('render specific text', () => {
    render(<Notifications />);
    const checkText = screen.getByText(/Here is the list of notifications/i);
    expect(checkText).toBeInTheDocument();
  });
});