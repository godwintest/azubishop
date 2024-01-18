import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PageStyle.css";

const Home = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated) {
      // Redirect to the cart page or the page to place an order
      navigate("/cart");
    } else {
      // Redirect to the login page if not authenticated
      navigate("/login");
    }
  };

  const products = [
    {
      id: "1",
      name: "Men Shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "29.00",
      image: "./assets/menshirt.png",
    },
    {
      id: "2",
      name: "Sneaker Nike",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "39.00",
      image: "./assets/nikesneaker.png",
    },
    {
      id: "3",
      name: "Puma Sneaker",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "30.00",
      image: "./assets/pumasneaker.png",
    },
    {
      id: "4",
      name: "Alonzi dress",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "19.00",
      image: "./assets/alonzidress.png",
    },
    {
      id: "5",
      name: "Men watch",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "16.00",
      image: "./assets/watch.png",
    },
    {
      id: "6",
      name: "Men cap",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "10.00",
      image: "./assets/cap.png",
    },
    {
      id: "7",
      name: "Ladies Jeans",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "40.00",
      image: "./assets/jeans.png",
    },
    {
      id: "8",
      name: "long sleeves",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
      price: "35.99",
      image: "./assets/longsleeves.png",
    },
  ];

  return (
    <div>
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
              <Link to={`/product/${encodeURIComponent(product.name)}`}>
                <img src={product.image} alt={product.name} />{" "}
              </Link>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-actions">
                  {/* <Link to={`/product/${product.name}`}> */}
                  {/* <Link to={`/product/${product.name.toLowerCase()}`}> */}
                  <Link to={`/product/${encodeURIComponent(product.name)}`}>
                    <button type="button" onClick={handlePlaceOrder}>
                      Place order
                    </button>
                  </Link>
                  <span className="product-price">${product.price}</span>
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
