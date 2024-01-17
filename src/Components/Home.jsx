import React from "react";
import { Link } from "react-router-dom";
import "./PageStyle.css";

const Home = () => {
  const products = [
    {
      id: "1",
      name: "Men Shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "$29.00",
      image: "./assets/menshirt.png",
    },
    {
      id: "2",
      name: "Sneaker Nike",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "$39.00",
      image: "./assets/nikesneaker.png",
    },
    {
      id: "3",
      name: "Puma Sneaker",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "$30.00",
      image: "./assets/pumasneaker.png",
    },
    {
      id: "4",
      name: "Alonzi dress",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "$19.00",
      image: "./assets/alonzidress.png",
    },
    {
      id: "5",
      name: "Men watch",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "$16.00",
      image: "./assets/watch.png",
    },
    {
      id: "6",
      name: "Men cap",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "$10.00",
      image: "./assets/cap.png",
    },
    {
      id: "7",
      name: "Ladies Jeans",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "$40.00",
      image: "./assets/jeans.png",
    },
    {
      id: "8",
      name: "long sleeves",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "$35.99",
      image: "./assets/longsleeves.png",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">AzubiShop</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <div className="login-btn">Login</div>
      </header>
      <main>
        {/* Search Bar */}
        {/* <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button type="button">Search</button>
        </div> */}

        <div className="search-bar">
          <div className="search-input-container">
            <div className="search-icon">&#128269;</div>
            <input type="text" placeholder="Search products..." />
          </div>
        </div>

        {/* Product Cards */}
        <div className="product-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-actions">
                  {/* <Link to={`/product/${product.name}`}> */}
                  {/* <Link to={`/product/${product.name.toLowerCase()}`}> */}
                  <Link to={`/product/${encodeURIComponent(product.name)}`}>
                    <button type="button">Place order</button>
                  </Link>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
