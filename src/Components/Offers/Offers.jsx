import React from "react";
import "./Offers.css";
import Offer1 from "../assets/Offer1.jpg";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive Offers For You</h1>
        <p>Only On Best Seller Products</p>
        <button>Check-Now</button>
      </div>
      <div className="offers-right">
        <img src={Offer1}></img>
      </div>
    </div>
  );
};

export default Offers;
