const NotificationContext = createContext();

export const NotificationsProvider = ({ children }) => {
    return <NotificationContext.Provider value={{}}>{children}</NotificationContext.Provider>;
};
