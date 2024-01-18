import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import ProductDetails from "./Components/ProductDetails";
import CartPage from "./Components/CartPage";
import { CartProvider } from "./Components/CartContext";
import Header from "./Components/Header/Header";
import Registration from "./Components/Registration/Registration";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="product/:name" element={<ProductDetails />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
