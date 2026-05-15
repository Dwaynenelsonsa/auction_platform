import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { NotificationsProvider } from './context/NotificationContext';
import './styles.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <NotificationsProvider>
                <App />
            </NotificationsProvider>
        </AuthProvider>
    </React.StrictMode>
);
