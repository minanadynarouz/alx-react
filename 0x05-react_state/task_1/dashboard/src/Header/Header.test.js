import { React } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';


describe('<Header />', () => {
  it('Render without crashing', () => {
    render(<Header />);
  });

  it('Render an img and h1 tags', () => {
    render(<Header />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'logo.jpg');
    expect(img).toHaveAttribute('alt', 'Holborten Logo');
    expect(screen.getByRole('heading', { name: /School dashboard/i })).toBeInTheDocument();
  });
})