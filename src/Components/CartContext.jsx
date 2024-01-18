import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Ensure the price is a number before adding to the cart
    // Ensure the price is a number before adding to the cart
    // const parsedPrice =
    //   typeof product.price === "string"
    //     ? parseFloat(product.price.replace("$", ""))
    //     : product.price;
    // const item = {
    //   ...product,
    //   price: parsedPrice,
    //   quantity: 1,
    // };

    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);

    // Update cart data in local storage
    localStorage.setItem(
      "cart",
      JSON.stringify([{ ...cart, ...product, quantity: 1 }])
    );
  };

  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.name !== product.name)
    );

    // Update cart data in local storage
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item.name !== product.name))
    );
  };

  const updateQuantity = (productName, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cart
      .reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      )
      .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
