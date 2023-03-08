import React, { useState } from "react";
import "./comp.css";
const Comp = () => {
  const [theme, setTheme] = useState(false);

  const handleToggleButton = () => {
    setTheme(!theme);
  };

  return (
    <div
      style={{ backgroundColor: theme ? "#282c35" : "white" }}
      className="Comp"
    >
      <div className="heading">
        <h1 style={{color: theme ? 'white' : 'black'}}>Overreacted</h1>
        <button style={{color: theme ? 'black' : 'white'}} onClick={handleToggleButton} className="toggle-button">
          Toggle
        </button>
      </div>
      <div className="sub-section">
        <div>
          <h1 className="content-heading">The WET Codebase</h1>
          <p style={{color: theme ? 'white' : 'black'}}>Come waste your with me</p>
        </div>
        <div>
          <h1 className="content-heading">Goodby, Clean Code</h1>
          <p style={{color: theme ? 'white' : 'black'}}>Let clean code guide you. Then let it go.</p>
        </div>
        <div>
          <h1 className="content-heading">My Decade In Review</h1>
          <p style={{color: theme ? 'white' : 'black'}}>A personal reflection</p>
        </div>
        <div>
          <h1 className="content-heading">
            What Are The React Team Principles
          </h1>
          <p style={{color: theme ? 'white' : 'black'}}>Thursday 4th, 2015 5min read</p>
        </div>
      </div>
    </div>
  );
};

export default Comp;
