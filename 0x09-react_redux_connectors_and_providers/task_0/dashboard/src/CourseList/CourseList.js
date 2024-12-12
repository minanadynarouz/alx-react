import CourseListRow from "./CourseListRow.js";
import { CourseShape } from './CourseShape.js';
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';


export default function CourseList({ listCourses }) {
  return (
    <div className={css(styles.tableContainer)}>
      {listCourses.length === 0 ? (
        <div>No courses available yet</div>
      ) : (
        <table id="CourseList" data-testid="courseList" className={css(styles.courseList)}>
          <thead >
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
          </thead>
          <tbody>
            {listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                sHeader={false}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                className={css(styles.courseListCell)} />
            ))}
          </tbody>
        </table>
      )
      }
    </div>
  )
}

const styles = StyleSheet.create({
  tableContainer: {
    width: '80vw',
    height: '50vh',
    borderCollapse: 'collapse',
    fontFamily: 'var(--font-fam)',
    display: 'flex',
    justifyContent: 'center',
    margin: '2% auto',
  },
  courseList: {
    position: 'relative',
    height: '60%',
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'var(--font-fam)',
    marginTop: '10px',
  },
  courseListCell: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  courseListHeader: {
    backgroundColor: '#fff',
  }
});

// Define propTypes for the CourseList component
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape)).isRequired,
};

// Set defaultProps for listCourses to an empty array
CourseList.defaultProps = {
  listCourses: [],
};

