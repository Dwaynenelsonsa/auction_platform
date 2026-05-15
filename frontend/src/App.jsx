import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import './styles.css';

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        // Check for session token
        const token = localStorage.getItem('token');
        if (token) {
            fetch('/auth/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => setUser(data.user))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    if (loading) {
        return (
            <div className="loading">Loading...</div>
        );
    }

    return (
        <Router>
            <Navbar user={user} onLogout={logout} />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={!user ? <Login /> : <ProductDetail />} />
                    <Route path="/register" element={!user ? <Register /> : <ProductDetail />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/dashboard" element={user ? <Dashboard /> : null} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
