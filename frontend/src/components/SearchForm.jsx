import React, { useState } from "react";

function SearchForm() {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Search is working. Backend search is not connected yet. Search term: ${search}`);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search auctions"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
