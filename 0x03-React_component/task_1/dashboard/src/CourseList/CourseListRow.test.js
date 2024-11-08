import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  test('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Course Title" />);

    const cell = screen.getByRole('columnheader', { name: /course title/i });
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveAttribute('colspan', '2');
  });

  test('renders two cells when isHeader is true and textSecondCell is present', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Course Title" textSecondCell="Credits" />);

    const firstCell = screen.getByRole('columnheader', { name: /course title/i });
    const secondCell = screen.getByRole('columnheader', { name: /credits/i });

    expect(firstCell).toBeInTheDocument();
    expect(secondCell).toBeInTheDocument();
    expect(firstCell).not.toHaveAttribute('colspan'); // Ensure it doesn't have colspan
    expect(secondCell).not.toHaveAttribute('colspan'); // Ensure second cell doesn't have colspan
  });

  test('renders two td elements within a tr element when isHeader is false', () => {
    render(<CourseListRow isHeader={false} textFirstCell="Course Title" textSecondCell="Credits" />);

    const firstCell = screen.getByRole('columnheader', { name: /course title/i });
    const secondCell = screen.getByRole('columnheader', { name: /credits/i });

    expect(firstCell).toBeInTheDocument();
    expect(secondCell).toBeInTheDocument();

    // Check that both cells are within a table row
    const row = firstCell.closest('tr'); // Get the closest tr element
    expect(row).toBeInTheDocument(); // Ensure the row is present
    expect(row).toContainElement(firstCell); // Ensure the first cell is in the row
    expect(row).toContainElement(secondCell); // Ensure the second cell is in the row
  });
});
