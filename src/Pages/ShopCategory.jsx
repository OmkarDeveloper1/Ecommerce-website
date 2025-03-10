import React, { useContext } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Dropdown from "../Components/assets/Dropdown.png";
import Item from "../Components/item/item";

const ShopCategory = (props) => {
  let { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="offers">
        <div className="offers-left">
          <h1>FLAT 40% OFF</h1>
          <p>10 Hours 27 Mins</p>
          <button>Explore Now</button>
        </div>
        <div className="offers-right">
          <img className="shopcategory-banner" src={props.banner}></img>
        </div>
      </div>

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out OF 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort-By
          {/* <img  style={{ height: "50px", width: "40px" }} src={Dropdown}></img> */}
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              ></Item>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore-More
      </div>
    </div>
  );
};

export default ShopCategory;
