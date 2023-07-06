import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#f8f8f8");

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <nav className="navbar" style={{ backgroundColor }}>
      <div className="navbar__content">
        <div className="navbar__welcome">
          Welcome to the Beauty and the Beast's estate!
        </div>
        <div className="navbar__menu">
          <div className="navbar__menu-toggle" onClick={handleMenuClick}>
            Menu
          </div>
          <div className={`navbar__dropdown ${isMenuOpen ? "active" : ""}`}>
            <div
              className="navbar__color-option"
              onClick={() => handleColorChange("#f8f8f8")}
            >
              Light Gray
            </div>
            <div
              className="navbar__color-option"
              onClick={() => handleColorChange("#fdde6a")}
            >
              Beauty
            </div>
            <div
              className="navbar__color-option"
              onClick={() => handleColorChange("#10258f")}
            >
              The Beast
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
