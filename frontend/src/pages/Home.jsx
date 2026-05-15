import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";

function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "All";

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !search ||
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const goToCategory = (selectedCategory) => {
    navigate(`/?category=${encodeURIComponent(selectedCategory)}`);
  };

  const exploreDeals = () => {
    navigate("/?category=Deals");
  };

  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div>
          <p className="hero-kicker">Daily Deals</p>
          <h1>Find it. Bid it. Win it.</h1>
          <p>Browse live auctions and buy now listings from trusted sellers.</p>
          <button type="button" onClick={exploreDeals}>Explore deals</button>
        </div>
      </section>

      <section className="quick-categories">
        <button type="button" onClick={() => goToCategory("Electronics")}>Electronics</button>
        <button type="button" onClick={() => goToCategory("Fashion")}>Fashion</button>
        <button type="button" onClick={() => goToCategory("Motors")}>Motors</button>
        <button type="button" onClick={() => goToCategory("Home")}>Home</button>
        <button type="button" onClick={() => goToCategory("Collectibles")}>Collectibles</button>
        <button type="button" onClick={() => goToCategory("Sports")}>Sports</button>
      </section>

      <section className="listing-section">
        <div className="section-title-row">
          <div>
            <h2>{category === "All" ? "Live Auctions" : `${category} Auctions`}</h2>
            <p>
              {search
                ? `Showing results for "${search}".`
                : "Ending soon. Place your bid before time runs out."}
            </p>
          </div>

          <Link to="/">See all</Link>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No matching listings found</h3>
            <p>Try a different search or category.</p>
            <button type="button" onClick={() => navigate("/")}>Clear filters</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
