import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__welcome">
          Welcome to the Beauty and the Beast's estate!
        </div>
        <div className="navbar__menu">Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
