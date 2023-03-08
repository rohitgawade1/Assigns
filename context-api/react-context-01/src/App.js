import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from './components/Contact'
import {Service} from './components/Service'
import { createContext, useState } from "react";

export const context = createContext()

function App() {
  const dark = {backgroundColor: 'black', color:'white'}
  const light = {backgroundColor: 'white', color:'black'}
  const [darktheme, setDarkTheme] = useState(false)
  return (
    <>
    <context.Provider value={{darktheme: darktheme, setDarkTheme:setDarkTheme}}>
      <div>I have changed theme to {darktheme ? 'Dark' : 'Light'}</div>
      <div style={darktheme ? dark : light}>
      <Navbar />
      <button onClick={() => {
        setDarkTheme(!darktheme);
      }}>Toggle theme to {darktheme ? 'Light' : 'Dark'}</button>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
      </div>
      </context.Provider>
    </>
  );
}

export default App;