import React from "react";
import Logo from "./assets/logos/logo.svg";
function Header() {
  return (
    <div className="content">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
