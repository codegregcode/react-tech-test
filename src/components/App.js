import React from "react";
import logo from "../assets/200424060716-nasa-worm-logo-removebg-preview.png";
import "../styles/app.css";

const App = () => {
  return (
    <div className="bg">
      <div className="app">
        <img className="nasa-logo" src={logo} alt="nasaLogo" />
      </div>
    </div>
  );
};

export default App;
