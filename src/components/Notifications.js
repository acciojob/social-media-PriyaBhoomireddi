import React, { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const refreshNotifications = () => {
    setNotifications(['New comment on your post', 'New follower']);
  };

  return (
    <div>
      <h1>Notifications</h1>
      <button className="button" onClick={refreshNotifications}>Refresh Notifications</button>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
