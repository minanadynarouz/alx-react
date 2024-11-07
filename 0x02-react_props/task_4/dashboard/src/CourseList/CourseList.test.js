import React from 'react';
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseList from "./CourseList";


test('renders CourseList component without crashing', () => {
  render(<CourseList />);
});

test('render 5 different rows', () => {
  render(<CourseList />);
  expect(screen.getByText('Available courses')).toBeInTheDocument();
  expect(screen.getByText('Credit')).toBeInTheDocument();
  expect(screen.getByText('ES6')).toBeInTheDocument();
  expect(screen.getByText('Webpack')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
})