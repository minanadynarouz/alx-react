import React from 'react';
import closeIcon from '../close-icon.svg'
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import { NotificationItemShape } from './NotificationItemShape.js';
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer, listNotifications }) {

  return (
    <>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer && (
        <div className="Notifications" data-testid="notifications">
          <button
            style={{
              position: "absolute",
              background: "none",
              border: "none",
              cursor: "pointer",
              top: "1vh",
              right: "0.3vw"
            }}
            aria-label='Close'
            onClick={() => console.log("Close button has been clicked")}>
            <img
              src={closeIcon}
              alt='Close Icon'
            />
          </button>
          {listNotifications.length === 0 ? (
            <div>No new notification for now</div>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    html={notification.html}
                    value={notification.value} />
                ))}
              </ul>
            </>
          )
          }
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)).isRequired
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}