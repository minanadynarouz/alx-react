import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });

  it('renders text copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('copyright')).toBe(true);
  });
});