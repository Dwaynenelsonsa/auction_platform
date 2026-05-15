import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications((current) => [
      ...current,
      {
        id: Date.now(),
        message
      }
    ]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
