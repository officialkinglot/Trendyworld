import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png';
import shoes_banner from './Components/Assets/banner_mens.png';
 

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/shop" element={<Shop/>} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/shoes" element={<ShopCategory banner={shoes_banner} category="shoes"/>}/>
        <Route path="/product" element={<Product/>}>
         <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="/cart" element= {<Cart/>} />
        <Route path="/login" element={<LoginSignup/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
