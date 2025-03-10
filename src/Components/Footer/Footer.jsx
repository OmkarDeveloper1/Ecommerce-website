import React from "react";
import "./Footer.css";
import Shopper from "../assets/Shopper.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img style={{ width: "80px", height: "60px" }} src={Shopper}></img>
        <div>SHOPPER</div>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img style={{width:'100px',height:'100px'}}  src={instagram}></img>
        </div>
        <div className="footer-icons-container">
          <img style={{width:'100px',height:'100px'}} src={whatsapp}></img>
        </div>
      </div>

      <div className="footer-copyright">
        <hr></hr>
        <p>Copy-Right @2024-2025 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
