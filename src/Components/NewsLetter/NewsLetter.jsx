import React from "react";
import "./NewsLetter.css";
import { Button } from "bootstrap";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe To Our Newsletter and Stay Updated</p>
      <div>
        <input type="email" placeholder="Your Email Id"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
