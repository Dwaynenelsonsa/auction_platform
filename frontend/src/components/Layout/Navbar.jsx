import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const runSearch = () => {
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search.trim());
    }

    if (category !== "All") {
      params.set("category", category);
    }

    navigate(`/?${params.toString()}`);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    runSearch();
  };

  const goToCategory = (selectedCategory) => {
    navigate(`/?category=${encodeURIComponent(selectedCategory)}`);
  };

  const handleSellClick = () => {
    if (!user) {
      navigate("/login?next=sell");
      return;
    }

    navigate("/dashboard");
  };

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
          <button type="button" className="text-button" onClick={() => alert("Help centre coming soon.")}>Help</button>
          <Link to="/dashboard?tab=watchlist">Watchlist</Link>
        </div>
      </div>

      <div className="main-header">
        <Link to="/" className="brand-logo brand-text">
          Mpumalanga Bid or Buy
        </Link>

        <form className="header-search" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            placeholder="Search for anything"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>All</option>
            <option>Electronics</option>
            <option>Motors</option>
            <option>Fashion</option>
            <option>Collectibles</option>
            <option>Sports</option>
            <option>Home</option>
            <option>Deals</option>
          </select>

          <button type="submit">Search</button>
        </form>

        <div className="header-actions">
          {user ? (
            <button type="button" onClick={onLogout}>Logout</button>
          ) : (
            <button type="button" className="sell-link" onClick={handleSellClick}>Sell</button>
          )}
        </div>
      </div>

      <nav className="category-nav">
        <Link to="/">Home</Link>
        <Link to="/dashboard?tab=watchlist">Saved</Link>
        <button type="button" onClick={() => goToCategory("Electronics")}>Electronics</button>
        <button type="button" onClick={() => goToCategory("Motors")}>Motors</button>
        <button type="button" onClick={() => goToCategory("Fashion")}>Fashion</button>
        <button type="button" onClick={() => goToCategory("Collectibles")}>Collectibles</button>
        <button type="button" onClick={() => goToCategory("Sports")}>Sports</button>
        <button type="button" onClick={() => goToCategory("Home")}>Home</button>
        <button type="button" onClick={() => goToCategory("Deals")}>Deals</button>
      </nav>
    </header>
  );
}

export default Navbar;
