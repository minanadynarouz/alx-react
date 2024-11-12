import PropTypes from "prop-types";
import './CourseListRow.css';

const headerRowStyle = { backgroundColor: '#f5f5f5ab' };
const defaultRowStyle = { backgroundColor: '#deb5b545' };


export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

  const rowStyle = isHeader ? headerRowStyle : defaultRowStyle;
  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th >{textFirstCell}</th>
            <th >{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td >{textFirstCell}</td>
          <td >{textSecondCell}</td>
        </>
      )}
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string || PropTypes.number
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}