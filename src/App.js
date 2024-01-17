import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ProductDetails from "./Components/ProductDetails";
import CartPage from "./Components/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="product/:name" element={<ProductDetails />} />
      <Route path="cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
