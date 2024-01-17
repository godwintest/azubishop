// CartPage.js

import React, { useState } from "react";
import "./CartPage.css";

const CartPage = () => {
  // Dummy cart data (replace with actual data from your local storage or API)
  const [cart, setCart] = useState([
    {
      name: "Men Shirt",
      price: 29.0,
      quantity: 1,
      image: "./assets/menshirt.png",
    },

    {
      name: "Sneaker Nike",
      price: 39.0,
      quantity: 1,
      image: "./assets/nikesneaker.png",
    },
    {
      name: "Puma Sneaker",
      price: 30.0,
      quantity: 1,
      image: "./assets/pumasneaker.png",
    },
    {
      name: "Alonzi dress",
      price: 19.0,
      quantity: 1,
      image: "./assets/alonzidress.png",
    },
    {
      name: "Men watch",
      price: 16.0,
      quantity: 1,
      image: "./assets/watch.png",
    },
    {
      name: "Men cap",
      price: 10.0,
      quantity: 1,
      image: "./assets/cap.png",
    },
    {
      name: "Ladies Jeans",
      price: 40.0,
      quantity: 1,
      image: "./assets/jeans.png",
    },
    {
      name: "long sleeves",
      price: 35.99,
      quantity: 1,
      image: "./assets/longsleeves.png",
    },
  ]);

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      {/* Cart Section */}
      <section className="cart-section">
        <h2>Cart</h2>
        <div className="cart-table">
          <div className="cart-row header">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Actions</div>
          </div>
          {cart.map((item, index) => (
            <div className="cart-row" key={index}>
              <div>{item.name}</div>
              <div>${item.price.toFixed(2)}</div>
              <div>
                <button onClick={() => decreaseQuantity(index)}>-</button>
                {item.quantity}
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
              <div>
                <button onClick={() => removeItem(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Total Price and Checkout */}
      <div className="total-price">Total Price: ${calculateTotal()}</div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CartPage;
