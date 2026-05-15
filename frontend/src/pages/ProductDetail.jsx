import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <section className="page">
      <h1>Product Details</h1>
      <p>This product detail page is ready for backend auction data.</p>
      {id && <p>Product ID: {id}</p>}
      <Link to="/">Back to home</Link>
    </section>
  );
}

export default ProductDetail;
