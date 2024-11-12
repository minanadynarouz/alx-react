import React, { Component } from 'react';
import close_icon from '../close-icon.svg';
import NotificationItem from './NotificationItem.js';
import { NotificationItemShape } from './NotificationItemShape.js';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Notification extends Component {
  // function that logs notification id to console
  markAsRead(id) {
    console.log(`Notification ${id} has been read`);
  }

  // function that makes the file only update when next listNotifications is longer than current
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    // assign props to local variables
    const { listNotifications, displayDrawer } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button style={{
              position: 'absolute',
              background: 'transparent',
              border: 'none',
              right: '20px',
            }}
              aria-label='close'
              onClick={() => {
                console.log('Close button has been clicked');
              }}>
              <img src={close_icon} alt="close" height="15px" width="15px"></img>
            </button>
            <p className={css(styles.notificationsParagraph)}>Here is the list of notifications</p>
            <ul>
              {/* listNotifications is empty condition */}
              {listNotifications.length === 0 && (
                <li>
                  <p className={css(styles.notificationsParagraph)}>No notification available yet</p>
                </li>
              )}
              {/* render listNotifications */}
              {listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                  id={notification.id}
                  style={
                    notification.type === "default"
                      ? styles.defaultNotification
                      : styles.urgentNotification
                  }
                />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}


Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

Notification.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape),
}

const styles = StyleSheet.create({
  notifications: {
    border: '3px dashed rgb(237, 63, 63)',
    padding: '0 10px 10px 10px',
    marginInline: '2%',
    position: 'absolute',
    left: '51.5vw',
    width: '40vw',
  },
  notificationsParagraph: {
    fontSize: '1.3rem',
  },
  defaultNotification: {
    color: '#2b41a1',
    fontSize: '1.2rem',
  },
  urgentNotification: {
    color: '#e73b3b',
    fontSize: '1.2rem',
  },
  menuItem: {
    marginInline: '2%',
    marginBottom: '2%',
    textAlign: 'right',
  },
});

export default Notification