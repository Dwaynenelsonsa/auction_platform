import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getBids, getStoredList, saveStoredList } from "../utils/storage.js";

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "summary";

  const [watchlist, setWatchlist] = useState(() => getStoredList("mpumalanga_watchlist"));
  const [sellingItems, setSellingItems] = useState(() => getStoredList("mpumalanga_selling"));
  const bids = getBids();

  const [sellForm, setSellForm] = useState({
    title: "",
    category: "Electronics",
    price: "",
    description: ""
  });

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  const removeWatchItem = (id) => {
    const next = watchlist.filter((item) => item._id !== id);
    setWatchlist(next);
    saveStoredList("mpumalanga_watchlist", next);
  };

  const handleSellChange = (event) => {
    setSellForm({
      ...sellForm,
      [event.target.name]: event.target.value
    });
  };

  const addSellingItem = (event) => {
    event.preventDefault();

    if (!sellForm.title || !sellForm.price || !sellForm.description) {
      alert("Complete the sell item form.");
      return;
    }

    const newItem = {
      _id: `sell-${Date.now()}`,
      ...sellForm,
      currentBid: Number(sellForm.price),
      createdAt: new Date().toLocaleString()
    };

    const next = [newItem, ...sellingItems];
    setSellingItems(next);
    saveStoredList("mpumalanga_selling", next);

    setSellForm({
      title: "",
      category: "Electronics",
      price: "",
      description: ""
    });

    alert("Item added to your selling list.");
  };

  return (
    <main className="page-shell">
      <section className="dashboard-panel">
        <div className="dashboard-header">
          <div>
            <h1>My Auction</h1>
            <p>Track your bids, watchlist, and items for sale.</p>
          </div>
        </div>

        <div className="dashboard-tabs">
          <button type="button" className={activeTab === "summary" ? "active" : ""} onClick={() => setTab("summary")}>Summary</button>
          <button type="button" className={activeTab === "watchlist" ? "active" : ""} onClick={() => setTab("watchlist")}>Watchlist</button>
          <button type="button" className={activeTab === "bids" ? "active" : ""} onClick={() => setTab("bids")}>Bids</button>
          <button type="button" className={activeTab === "sell" ? "active" : ""} onClick={() => setTab("sell")}>Sell</button>
        </div>

        {activeTab === "summary" && (
          <div className="summary-grid">
            <button type="button" onClick={() => setTab("watchlist")}>
              <strong>{watchlist.length}</strong>
              Watchlist items
            </button>

            <button type="button" onClick={() => setTab("bids")}>
              <strong>{bids.length}</strong>
              Bids placed
            </button>

            <button type="button" onClick={() => setTab("sell")}>
              <strong>{sellingItems.length}</strong>
              Items for sale
            </button>
          </div>
        )}

        {activeTab === "watchlist" && (
          <div className="dashboard-list">
            <h2>Watchlist</h2>

            {watchlist.length === 0 ? (
              <p>No saved items yet. Go back to <Link to="/">Live Auctions</Link> and click Watch.</p>
            ) : (
              watchlist.map((item) => (
                <div className="dashboard-item" key={item._id}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>Current bid: €{item.currentBid}</p>
                  </div>

                  <div className="dashboard-actions">
                    <Link to={`/product/${item._id}`}>View</Link>
                    <button type="button" onClick={() => removeWatchItem(item._id)}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "bids" && (
          <div className="dashboard-list">
            <h2>Your bids</h2>

            {bids.length === 0 ? (
              <p>No bids placed yet.</p>
            ) : (
              bids.map((bid) => (
                <div className="dashboard-item" key={bid.id}>
                  <div>
                    <strong>Bid amount: €{bid.amount}</strong>
                    <p>Product ID: {bid.productId}</p>
                    <p>{bid.createdAt}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "sell" && (
          <div className="sell-panel">
            <h2>List an item</h2>

            <form className="form-card" onSubmit={addSellingItem}>
              <label>
                Item title
                <input name="title" value={sellForm.title} onChange={handleSellChange} placeholder="Example: Samsung TV 55 inch" />
              </label>

              <label>
                Category
                <select name="category" value={sellForm.category} onChange={handleSellChange}>
                  <option>Electronics</option>
                  <option>Motors</option>
                  <option>Fashion</option>
                  <option>Collectibles</option>
                  <option>Sports</option>
                  <option>Home</option>
                </select>
              </label>

              <label>
                Starting price
                <input name="price" type="number" value={sellForm.price} onChange={handleSellChange} placeholder="100" />
              </label>

              <label>
                Description
                <textarea name="description" value={sellForm.description} onChange={handleSellChange} placeholder="Describe the item" />
              </label>

              <button type="submit">Add item</button>
            </form>

            <h3>Your selling list</h3>

            {sellingItems.length === 0 ? (
              <p>No items listed yet.</p>
            ) : (
              sellingItems.map((item) => (
                <div className="dashboard-item" key={item._id}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.category} · Starting at €{item.currentBid}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default Dashboard;
