import React from 'react';
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseList from "./CourseList";


test('renders CourseList component without crashing', () => {
  const courses = [
    { id: 1, name: 'React Basics', credit: 20 },
    { id: 2, name: 'Advanced JavaScript', credit: 30 },
  ];
  render(<CourseList listCourses={courses} />);
});

test('render 5 different rows', () => {
  const courses = [
    { id: 1, name: 'React Basics', credit: 20 },
    { id: 2, name: 'Advanced JavaScript', credit: 30 },
  ];
  render(<CourseList listCourses={courses} />);
  expect(screen.getByText('Available courses')).toBeInTheDocument();
  expect(screen.getByText('Credit')).toBeInTheDocument();
  expect(screen.getByText('ES6')).toBeInTheDocument();
  expect(screen.getByText('Webpack')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
});

describe('CourseList Component', () => {
  test('renders correctly with an empty array or without listCourses', () => {
    render(<CourseList listCourses={false} />);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });

  test('renders correctly when listCourses is provided with courses', () => {
    const courses = [
      { id: 1, name: 'React Basics', credit: 20 },
      { id: 2, name: 'Advanced JavaScript', credit: 30 },
    ];
    render(<CourseList listCourses={courses} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(courses.length + 2); // Including header row
  });
});