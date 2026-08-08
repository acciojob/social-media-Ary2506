import React from "react";
import { useAppState } from "../context/AppContext";

const NotificationsPage = () => {
  const { notifications, refreshNotifications } = useAppState();

  return (
    <section>
      <h2>Notifications</h2>
      <button type="button" className="button" onClick={refreshNotifications}>
        Refresh Notifications
      </button>
      <section className="notificationsList">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            {notification.message}
          </div>
        ))}
      </section>
    </section>
  );
};

export default NotificationsPage;
