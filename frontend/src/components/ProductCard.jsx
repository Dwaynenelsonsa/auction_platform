import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toggleStoredItem, getStoredList } from "../utils/storage.js";

function ProductCard({ product }) {
  const [isWatched, setIsWatched] = useState(() => {
    return getStoredList("mpumalanga_watchlist").some((item) => item._id === product._id);
  });

  const toggleWatch = () => {
    const result = toggleStoredItem("mpumalanga_watchlist", product);
    setIsWatched(result.saved);

    alert(result.saved ? "Added to watchlist." : "Removed from watchlist.");
  };

  return (
    <article className="product-card">
      <Link to={`/product/${product._id}`} className="product-image-wrap">
        <img src={product.image} alt={product.title} />
      </Link>

      <div className="product-card-body">
        <Link to={`/product/${product._id}`} className="product-title">
          {product.title}
        </Link>

        <p className="product-description">{product.description}</p>

        <div className="price-row">
          <span className="price">€{product.currentBid}</span>
          <span className="bid-count">{product.bids} bids</span>
        </div>

        <p className="buy-now">Buy it now €{product.buyNow}</p>
        <p className="shipping">{product.shipping}</p>
        <p className="time-left">Time left: {product.endTime}</p>

        <div className="card-actions">
          <Link to={`/product/${product._id}`}>View details</Link>
          <button type="button" onClick={toggleWatch}>
            {isWatched ? "Watching" : "Watch"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
