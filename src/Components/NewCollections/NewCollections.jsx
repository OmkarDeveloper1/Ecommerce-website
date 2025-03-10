import React from "react";
import "./NewCollections.css";
import data_product from "../assets/data";
import NewColl from "../assets/NewColl";
import Item from "../item/item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr></hr>

      <div className="collections">
        {NewColl.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
