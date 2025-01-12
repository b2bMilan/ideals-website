import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ 
        padding: "10px", 
        backgroundColor: "#f8f8f8", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between" 
      }}>
        <Link to="/ideals-website/">
          <img 
            src="./Logo.png" 
            alt="Logo" 
            style={{ height: "40px", padding: "10px" }} 
          />
        </Link>
        <div>
          <Link to="/ideals-website/" style={{ marginRight: "20px" }}>
            Home
          </Link>
          <Link to="/ideals-website/guide" style={{ marginRight: "20px" }}>
            Instructions
          </Link>
          <Link to="/ideals-website/contact" style={{ marginRight: "20px" }}>
            Contact
          </Link>
          <Link to="/ideals-website/privacy">
            Privacy
          </Link>
        </div>
      </nav>
      
  );
};

export default Navbar;
