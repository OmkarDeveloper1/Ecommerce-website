import React from "react";
import "./Breadcrum.css";
import arrow from "../assets/arrow.png";

const Breadcrums = (props) => {
  let { product } = props;
  return (
    <div className="Breadcrums-container">
      Home <img src={arrow}/>
      Shop <img src={arrow}/>
      {product.category} <img src={arrow}/>
      {product.name}
    </div>
  );
};

export default Breadcrums;
