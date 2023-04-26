import React, { useState } from "react";
import logo from "./images/netflix-logo.png";
import emoji from "./images/green-blue-emoji.png";
import "./header.css";

function Header() {
  const [isdark, setIsDark] = useState(false);

  window.onscroll = () => {
    // if(window.scrollY > 150){
    //     setIsDark(true)
    // }
    // else    setIsDark(false)

    setIsDark(window.scrollY > 150 ? true : false);
  };

  return (
    <header className={isdark ? "dark" : ""}>
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right">
        <img src={emoji} alt="Emoji" />
      </div>
    </header>
  );
}

export default Header;
