import CourseListRow from "./CourseListRow.js";
import './CourseList.css'

export default function CourseList() {
  return (
    <div className="tableContainer">
      <table id="CourseList" data-testid="courseList">
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
          <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
          <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" />
        </tbody>
      </table>
    </div>
  )
}