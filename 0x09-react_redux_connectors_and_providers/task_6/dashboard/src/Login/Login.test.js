import { React } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import Login from './Login';

describe('<Login />', () => {
  it('Render Login component without crashing', () => {
    render(<Login />);
  })

  it('Renders 2 labels tags', () => {
    render(<Login />);
    const emailLabel = screen.getByLabelText(/Email/i);
    const passwordLabel = screen.getByLabelText(/Password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  })
})