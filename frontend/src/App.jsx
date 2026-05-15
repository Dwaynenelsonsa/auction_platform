import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import "./styles.css";

function App() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <Navbar user={user} onLogout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
