import React from "react";
import ProductCard from "../components/ProductCard.jsx";
import SearchForm from "../components/SearchForm.jsx";

function Home() {
  const sampleProducts = [
    {
      _id: "1",
      title: "Sample Auction Item",
      description: "This is a test auction item so the app can display while the backend is being finished.",
      currentBid: 100,
      endTime: "Not connected to backend yet"
    },
    {
      _id: "2",
      title: "Demo Product",
      description: "Another placeholder product for frontend testing.",
      currentBid: 250,
      endTime: "Not connected to backend yet"
    }
  ];

  return (
    <section className="page">
      <h1>Live Auctions</h1>
      <p>Browse products, search listings, and place bids once the backend is connected.</p>

      <SearchForm />

      <div className="product-grid">
        {sampleProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Home;
