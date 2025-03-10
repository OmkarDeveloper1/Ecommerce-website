import React, { useState } from "react";
import "./Navbar.css";
import Shopper from '../assets/Shopper.png'
import Cart from "../assets/shopping-cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className="navbar ">
      <div className="nav-logo">
        <img style={{ width: "80px", height: "60px" }} src={Shopper}></img>
        <p style={{ fontSize: "30px", fontWeight: 600, color: "#171717" }}>
          SHOPPER
        </p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "Shop" ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Mens">
            Men
          </Link>
          {menu === "Men" ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Women">
            Women
          </Link>
          {menu === "Women" ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Kids">
            Kids
          </Link>{" "}
          {menu === "Kids" ? <hr></hr> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          {" "}
          <img style={{ height: "40px" , paddingLeft:'100px' }} src={Cart}></img>
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
