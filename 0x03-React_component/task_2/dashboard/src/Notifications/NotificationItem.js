import PropTypes, { object } from "prop-types"

class NotificationItem extends React.Component {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <li
        data-notification-type={type}
        onClick={markAsRead(id)}
      >
        {value}
        <span data-testid="spanHtml" dangerouslySetInnerHTML={{ __html: html }} />
      </li>
    )
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func, // New property type for markAsRead function
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => { },
};

export default NotificationItem;