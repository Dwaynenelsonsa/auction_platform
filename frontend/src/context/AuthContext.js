import { createContext, useState, useEffect } from 'react';
import { api } from './services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) api.authToken = token;
    }, []);

    const login = (username, password) => {
        api.post('/auth/login', { username, password });
        setUser(JSON.parse(res));
    };

    return <>{children}</>;
};

