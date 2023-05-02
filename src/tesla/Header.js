import React, { useState } from "react";
import "./header.css";

function Header() {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  function showMenu(e){
    e.preventDefault()
    setSidebarOpen(true);
  }

  return (
    <>
      <header>
        <img src="images/logo.svg" alt="Logo" />

        <ul>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roof</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#" onClick={showMenu}>Menu</a>
          </li>
        </ul>
      </header>
      <ul className="sidebar" style={{right: (sidebarOpen) ? 0 : '-250px'}}>
        
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panel</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
