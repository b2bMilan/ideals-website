import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f8f8f8" }}>
      <Link to="/ideals-website/" style={{ marginRight: "20px" }}>
        Home
      </Link>
      <Link to="/ideals-website/guide" style={{ marginRight: "20px" }}>Instructions</Link>
      <Link to="/ideals-website/contact" style={{ marginRight: "20px" }}>Contact</Link>
      <Link to="/ideals-website/privacy" style={{ marginRight: "10px" }}>Privacy</Link>
    </nav>
  );
};

export default Navbar;
