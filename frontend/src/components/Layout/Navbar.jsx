import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-title">Auction Platform</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button type="button" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
