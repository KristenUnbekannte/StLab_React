import React from "react";
import Menu from "../views/Menu";
import "../App.css";
import logo from "../logo.svg";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
