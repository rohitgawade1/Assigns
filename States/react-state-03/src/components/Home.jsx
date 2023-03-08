import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="heading-container">
        <h1 className="heading">Password Generator</h1>
      </div>
      <div className="input-container">
        <input type="text" />
        <button>copy</button>
      </div>
      <div className="password-length-container">
        <p>Set password length</p>
        <input type="number" />
      </div>
      <div className="checkbox-container">
        <div className="uppercase-container">
          <input type="checkbox" />
          <span>Include Uppercase letters</span>
        </div>
        <div className="lowercase-container">
          <input type="checkbox" />
          <span>Include Lowercase letters</span>
        </div>
        <div className="number-container">
          <input type="checkbox" />
          <span>Include Numbers</span>
        </div>
        <div className="symbol-container">
          <input type="checkbox" />
          <span>Include symbols</span>
        </div>
      </div>
      <button>Generate Password</button>
    </div>
  );
};

export default Home;
