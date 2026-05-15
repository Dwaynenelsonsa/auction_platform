import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>

      <div className="product-meta">
        <strong>Current bid:</strong> €{product.currentBid}
      </div>

      <div className="product-meta">
        <strong>Ends:</strong> {product.endTime}
      </div>

      <Link className="card-link" to={`/product/${product._id}`}>
        View auction
      </Link>
    </article>
  );
}

export default ProductCard;
