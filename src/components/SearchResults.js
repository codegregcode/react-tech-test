import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>Search the universe using the search bar above!</p>;
  } else {
    return (
      <div className="search-results-container">
        {results.map((image, index) => (
          <img
            className="card-image"
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    );
  }
};

export default SearchResults;
