import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, style } = this.props;

    if ((type && value) && (typeof type === 'string' && typeof value === 'string') && !html)
      return (
        <li
          data-notification-type={type}
          onClick={markAsRead}
          style={style}>
          {value}
        </li>
      );

    if (!type && html && html.__html)
      return (
        <li
          data-notification-type="default"
          dangerouslySetInnerHTML={html}
          onClick={markAsRead}
          style={style}>
        </li>
      );

    if (type && html && html.__html)
      return (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={markAsRead}
          style={style}>
        </li>
      );

    return (
      <li
        data-notification-type="default"
        onClick={markAsRead}
        style={style}>
        NotificationItem: invalid props
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({
    __html: propTypes.string,
  }),
  markAsRead: propTypes.func,
  id: propTypes.number,
  style: propTypes.object, // Add style prop type
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => { },
  id: 0,
  style: {}, // Default empty style object
};

export default NotificationItem;
