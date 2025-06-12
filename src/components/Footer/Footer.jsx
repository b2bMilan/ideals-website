import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <Link to="/guide" style={{ marginRight: "20px" }}>Instructions</Link>
        <Link to="/contact" style={{ marginRight: "20px" }}>Contact</Link>
        <Link to="/privacy" style={{ marginRight: "10px" }}>Privacy</Link>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} iDeals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;