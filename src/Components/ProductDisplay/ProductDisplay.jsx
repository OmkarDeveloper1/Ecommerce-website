import React from "react";
import "./ProductDisplay.css";
import Nstar from "../assets/Nstar.png";
import Fstar from "../assets/Fstar.png";


const ProductDisplay = (props) => {
  let { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image}></img>
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={Nstar}></img>
          <img src={Nstar}></img>
          <img src={Nstar}></img>
          <img src={Nstar}></img>
          <img src={Fstar}></img>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tenetur
          quia. Alias totam perferendis eveniet vitae necessitatibus, tenetur
          unde autem nisi, aliquam at laborum soluta est ratione ducimus
          veritatis esse?
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button> ADD TO CART </button>
        <p className="productdisplay-right-category">
          <span>Category : </span> Women, T-shirt , Crop-Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
