import { shallow, mount } from '../../config/setupTests';
import React from 'react';
import App from './App';
import Login from '../Login/Login';


// shallow render app component
describe('<App />', () => {
  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })

  it('Contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toBe(1);
  })

  it('Contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  })

  it('Contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toBe(1);
  })

  it('Tests that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').length).toBe(0);
  })
});


// describe case when isLoggedIn is true
describe('<App />', () => {
  it('Tests that the Login component is not rendered', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<Login />)).toBe(false);
  })

  it('Tests that CourseList component is rendered', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('CourseList').length).toBe(1);
  })

  // next 2 tests are under review, spyOn() is not working
  // and I keep getting this error:
  // TypeError: wrapper.instance(...).keyDownHandler is not a function

  it(`Verifies that alert is called when ctrl-h is pressed`, () => {
    const AlertSpy = jest.spyOn(window, 'alert');
    const wrapper = mount(<App isLoggedIn />);
    wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
    expect(AlertSpy).toHaveBeenCalledWith('Logging you out');
    wrapper.unmount();
  })

  it(`Verifies that logOut function is called when ctrl-h is pressed`, () => {
    const ConsoleSpy = jest.spyOn(global.console, 'log');
    const wrapper = mount(<App isLoggedIn />);
    wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
    expect(ConsoleSpy).toHaveBeenCalledWith('logOut function console log for testing');
    wrapper.unmount();
  })

})