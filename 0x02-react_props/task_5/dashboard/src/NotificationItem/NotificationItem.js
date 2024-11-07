import PropTypes, { object } from "prop-types"

export default function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type}>
      {value}
      <span data-testid="spanHtml" dangerouslySetInnerHTML={{ __html: html }} />
    </li>
  )
}

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
}

NotificationItem.defaultProps = {
  type: "default",
}