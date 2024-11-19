import { React } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './Footer';

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer />);

  })
  it('Render without crashing', () => {
    // Pass automatically if rendered without crashing.
  })

  it('Render text Copyright', () => {
    const yearInParagraph = screen.getByText(new RegExp(`Copyright\\s*${new Date().getFullYear()}`, 'i'))
    expect(yearInParagraph).toBeInTheDocument();
  })
})