import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import Offer1 from "./Components/assets/Offer1.jpg";
import WomenBannerr from "./Components/assets/WomenBannerr.jpg";
import n5 from './Components/assets/n5.jpg'
import n13 from './Components/assets/n13.jpg'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/Mens"
            element={<ShopCategory banner={n5} category="Mens" />}
          ></Route>
          <Route
            path="/Women"
            element={<ShopCategory banner={WomenBannerr} category="Women" />}
          ></Route>
          <Route
            path="/Kids"
            element={<ShopCategory banner={n13} category="Kids" />}
          ></Route>
          <Route path="/product" element={<Product />}></Route>

          <Route path=":productId" element={<Product></Product>}></Route>

          <Route path="/cart" element={<Cart></Cart>}></Route>

          <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
