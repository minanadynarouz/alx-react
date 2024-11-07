import React from 'react';
import { getLatestNotification } from './utils.js';
import closeIcon from './close-icon.svg'
import './Notifications.css';
import NotificationItem from './NotificationItem/NotificationItem.js';
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer }) {
  const notificationMessage = getLatestNotification();
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
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={notificationMessage} />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
}

Notifications.defaultProps = {
  displayDrawer: false,
}