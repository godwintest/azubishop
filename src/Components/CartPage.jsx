import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } =
    useCart();

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateQuantity(updatedCart[index].name, updatedCart[index].quantity);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateQuantity(updatedCart[index].name, updatedCart[index].quantity);
    }
  };

  const removeItem = (index) => {
    removeFromCart(cart[index]);
  };

  // const calculateTotal = (item) => {
  //   const price = parseFloat(item.price);
  //   if (isNaN(price) || isNaN(item.quantity)) {
  //     return 0;
  //   }
  //   return price * item.quantity;
  // };

  const calculateGrandTotal = () => {
    return cart.reduce((total, item) => total + calculateTotal(item), 0);
  };

  const calculateTotal = (item) => {
    const price = parseFloat(item.price.replace("$", ""));
    if (isNaN(price) || isNaN(item.quantity)) {
      // console.error("Invalid Price or Quantity:", item);
      return 0;
    }
    const total = price * item.quantity;
    // console.log("Total:", total);
    return total;
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
          <hr />
          {cart.map((item, index) => (
            <div className="cart-row" key={index}>
              {/* <div>{item.name}</div> */}
              <img
                className="cart-product-image"
                src={`/${item.image}`}
                alt={item.name}
              />
              <div>{item.price}</div>
              <div className="cal-quantity">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                {item.quantity}
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <div>${calculateTotal(item).toFixed(2)}</div>
              <div>
                <button
                  className="delete-button"
                  onClick={() => removeItem(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Total Price and Checkout */}
      <div className="total-price">
        Total Price: ${calculateGrandTotal().toFixed(2)}
        <div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
      {/* Back to Product Details */}
      <div className="back-to-product-details">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default CartPage;
