import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('rendering without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('render correct html when passed type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);

    expect(wrapper.html()).toContain('data-notification-type="default"');
    expect(wrapper.text()).toBe('test');
  })

  it('renders the correct html when passed an html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});