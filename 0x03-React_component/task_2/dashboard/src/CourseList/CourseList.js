import CourseListRow from "./CourseListRow.js";
import { CourseShape } from './CourseShape.js';
import PropTypes from "prop-types";
import './CourseList.css'

export default function CourseList({ listCourses }) {
  return (
    <div className="tableContainer">
      {listCourses.length === 0 ? (
        <div>No courses available yet</div>
      ) : (
        <table id="CourseList" data-testid="courseList">
          <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
          </thead>
          <tbody>
            {listCourses.map((course) => (
              <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />
            ))}
          </tbody>
        </table>
      )
      }
    </div>
  )
}

// Define propTypes for the CourseList component
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape)).isRequired,
};

// Set defaultProps for listCourses to an empty array
CourseList.defaultProps = {
  listCourses: [],
};