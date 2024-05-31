import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import About from "./components/About";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";
import Contact from "./components/Contact";
import Home2 from "./components/Home2";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home2/>} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Products/:categoryName" element={<Products />} />
          <Route path="/Products" element={<AllProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
