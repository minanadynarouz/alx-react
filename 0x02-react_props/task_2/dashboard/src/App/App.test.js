import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";

describe("App Component Tests", () => {
  it("Renders without crashing", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(Notifications).exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});