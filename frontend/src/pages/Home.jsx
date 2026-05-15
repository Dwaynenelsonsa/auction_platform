import React from "react";
import ProductCard from "../components/ProductCard.jsx";

function Home() {
  const sampleProducts = [
    {
      _id: "1",
      title: "Apple iPhone 14 Pro 128GB Unlocked",
      description: "Excellent condition. Clean device with charger included.",
      currentBid: 420,
      buyNow: 575,
      bids: 18,
      endTime: "2h 14m",
      shipping: "Free shipping",
      image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=600&q=80"
    },
    {
      _id: "2",
      title: "Sony WH1000XM5 Wireless Headphones",
      description: "Noise cancelling headphones with case. Lightly used.",
      currentBid: 145,
      buyNow: 229,
      bids: 9,
      endTime: "5h 42m",
      shipping: "€8.95 delivery",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80"
    },
    {
      _id: "3",
      title: "Gaming Laptop RTX Series 15 Inch",
      description: "Fast gaming laptop, ideal for work, games, and study.",
      currentBid: 680,
      buyNow: 895,
      bids: 27,
      endTime: "1d 3h",
      shipping: "Collection or delivery",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&q=80"
    },
    {
      _id: "4",
      title: "Vintage Mechanical Watch",
      description: "Classic watch with leather strap. Working condition.",
      currentBid: 95,
      buyNow: 160,
      bids: 13,
      endTime: "8h 10m",
      shipping: "Free postage",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div>
          <p className="hero-kicker">Daily Deals</p>
          <h1>Find it. Bid it. Win it.</h1>
          <p>Browse live auctions and buy now listings from trusted sellers.</p>
          <button type="button">Explore deals</button>
        </div>
      </section>

      <section className="quick-categories">
        <button>Electronics</button>
        <button>Fashion</button>
        <button>Motors</button>
        <button>Home</button>
        <button>Collectibles</button>
        <button>Sports</button>
      </section>

      <section className="listing-section">
        <div className="section-title-row">
          <div>
            <h2>Live Auctions</h2>
            <p>Ending soon. Place your bid before time runs out.</p>
          </div>
          <a href="/">See all</a>
        </div>

        <div className="product-grid">
          {sampleProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
