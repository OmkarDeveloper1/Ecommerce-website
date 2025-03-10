import React, { createContext } from "react";
import all_products from "../Components/assets/all_products";

export let ShopContext = createContext(null);
let ShopContextProvider = (props) => {
  let contextValue = {
    all_products,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
