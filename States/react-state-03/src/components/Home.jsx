import React, { useState } from "react";
import "./home.css";
import { handleCheck, handleClick, handlePasswordLength } from "./handleCheck";


const Home = () => {
  const [pass, setPass] = useState('')
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(pass);
    setCopied(true)
    setPass('')
  }
  return (
    <div className="home">
      <div className="heading-container">
        <h1 className="heading">Password Generator</h1>
      </div>
      <div className="input-container">
        <span>{pass}</span><button onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <div className="password-length-container">
        <p>Set password length</p>
        <input onChange={handlePasswordLength}  type="number" />
      </div>
      <div className="checkbox-container">
        <div className="uppercase-container">
          <input name="uppercase" onChange={handleCheck} type="checkbox" />
          <span>Include Uppercase letters</span>
        </div>
        <div className="lowercase-container">
          <input name="lowercase" onChange={handleCheck} type="checkbox" />
          <span>Include Lowercase letters</span>
        </div>
        <div className="number-container">
          <input name="numbers" onChange={handleCheck} type="checkbox" />
          <span>Include Numbers</span>
        </div>
        <div className="symbol-container">
          <input name="symbols" onChange={handleCheck} type="checkbox" />
          <span>Include symbols</span>
        </div>
      </div>
      <button className="pass-button" onClick={() => {
        setPass(handleClick())
      }}>Generate Password</button>
    </div>
  );
};

export default Home;
