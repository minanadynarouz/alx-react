import React from 'react';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.svg'
import './Notifications.css';

export default function Notifications() {
  const notificationMessage = getLatestNotification();
  return (
    <div className="Notifications">
      <button
        style={{
          position: "absolute",
          background: "none",
          border: "none",
          cursor: "pointer",
          top: "20px",
          left: "91%"
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: notificationMessage }} />
      </ul>
    </div>


  );
}