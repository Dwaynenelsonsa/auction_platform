import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="top-left">
          <span>Hi, welcome to Mpumalanga Bid or Buy</span>
          {!user && <Link to="/login">Sign in</Link>}
          {!user && <Link to="/register">Register</Link>}
        </div>

        <div className="top-right">
          <Link to="/dashboard">My Auction</Link>
          <span>Help</span>
          <span>Watchlist</span>
        </div>
      </div>

      <div className="main-header">
        <Link to="/" className="brand-logo brand-text">Mpumalanga Bid or Buy</Link>

        <div className="header-search">
          <input type="search" placeholder="Search for anything" />
          <select>
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Motors</option>
            <option>Home and Garden</option>
            <option>Fashion</option>
          </select>
          <button type="button">Search</button>
        </div>

        <div className="header-actions">
          {user ? (
            <button type="button" onClick={onLogout}>Logout</button>
          ) : (
            <Link to="/login" className="sell-link">Sell</Link>
          )}
        </div>
      </div>

      <nav className="category-nav">
        <Link to="/">Home</Link>
        <span>Saved</span>
        <span>Electronics</span>
        <span>Motors</span>
        <span>Fashion</span>
        <span>Collectibles</span>
        <span>Sports</span>
        <span>Home</span>
        <span>Deals</span>
      </nav>
    </header>
  );
}

export default Navbar;

