import React from "react";
import "./Hero.css";
import heroo2 from "../assets/heroo2.png";
import arrow from "../assets/arrow.png";
import hand from "../assets/hand.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <h2>New Arrivals Only</h2>
          <img style={{ height: "300px", width: "400px" }} src={hand}></img>
          <div className="hero-hand-icon">
            <p>
              New Collections <br></br> for everyone
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img style={{ width: "40px", height: "40px" }} src={arrow}></img>
        </div>
      </div>
      <div className="hero-right">
        <img style={{ height: "550px", width: "550px" }} src={heroo2}></img>
      </div>
    </div>
  );
};

export default Hero;
