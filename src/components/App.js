import React, { useState } from "react";
import logo from "../assets/200424060716-nasa-worm-logo-removebg-preview.png";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="bg">
      <div className="app">
        <img className="nasa-logo" src={logo} alt="nasaLogo" />
        <Search setSearchResults={setSearchResults} />
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
};

export default App;
