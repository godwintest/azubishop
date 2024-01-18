import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { useCart } from "./CartContext";

const ProductDetails = () => {
  // Get product name from URL params
  const { name } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Dummy product data (replace with actual data from your local storage or API)
  const products = [
    {
      id: "1",
      name: "Men Shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc morbi ipsum urna lectus. Nibh eu aliquam tellus feugiat eu venenatis. Neque non porttitor pellentesque etiam diam duis fringilla. Integer justo amet vitae scelerisque purus aliquet. Vitae dui duis tellus consequat nisl. Sit sem leo arcu.",
      price: "$29.00",
      image: "./assets/menshirt.png",
    },
    {
      id: "2",
      name: "Sneaker Nike",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc morbi ipsum urna lectus. Nibh eu aliquam tellus feugiat eu venenatis. Neque non porttitor pellentesque etiam diam duis fringilla. Integer justo amet vitae scelerisque purus aliquet. Vitae dui duis tellus consequat nisl. Sit sem leo arcu.",
      price: "$39.00",
      image: "./assets/nikesneaker.png",
    },
    {
      id: "3",
      name: "Puma Sneaker",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc morbi ipsum urna lectus. Nibh eu aliquam tellus feugiat eu venenatis. Neque non porttitor pellentesque etiam diam duis fringilla. Integer justo amet vitae scelerisque purus aliquet. Vitae dui duis tellus consequat nisl. Sit sem leo arcu.",
      price: "$30.00",
      image: "./assets/pumasneaker.png",
    },
    {
      id: "4",
      name: "Alonzi dress",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc morbi ipsum urna lectus. Nibh eu aliquam tellus feugiat eu venenatis. Neque non porttitor pellentesque etiam diam duis fringilla. Integer justo amet vitae scelerisque purus aliquet. Vitae dui duis tellus consequat nisl. Sit sem leo arcu.",
      price: "$19.00",
      image: "./assets/alonzidress.png",
    },
    {
      id: "5",
      name: "Men watch",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc morbi ipsum urna lectus. Nibh eu aliquam tellus feugiat eu venenatis. Neque non porttitor pellentesque etiam diam duis fringilla. Integer justo amet vitae scelerisque purus aliquet. Vitae dui duis tellus consequat nisl. Sit sem leo arcu.",
      price: "$16.00",
      image: "./assets/watch.png",
    },
    {
      id: "6",
      name: "Men cap",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc morbi ipsum urna lectus. Nibh eu aliquam tellus feugiat eu venenatis. Neque non porttitor pellentesque etiam diam duis fringilla. Integer justo amet vitae scelerisque purus aliquet. Vitae dui duis tellus consequat nisl. Sit sem leo arcu.",
      price: "$10.00",
      image: "./assets/cap.png",
    },
    {
      id: "7",
      name: "Ladies Jeans",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc morbi ipsum urna lectus. Nibh eu aliquam tellus feugiat eu venenatis. Neque non porttitor pellentesque etiam diam duis fringilla. Integer justo amet vitae scelerisque purus aliquet. Vitae dui duis tellus consequat nisl. Sit sem leo arcu.",
      price: "$40.00",
      image: "./assets/jeans.png",
    },
    {
      id: "8",
      name: "long sleeves",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc morbi ipsum urna lectus. Nibh eu aliquam tellus feugiat eu venenatis. Neque non porttitor pellentesque etiam diam duis fringilla. Integer justo amet vitae scelerisque purus aliquet. Vitae dui duis tellus consequat nisl. Sit sem leo arcu.",
      price: "$35.99",
      image: "./assets/longsleeves.png",
    },
  ];

  // Find the selected product by name
  const selectedProduct = products.find((product) => product.name === name);

  if (!selectedProduct) {
    // Handle case when the product is not found
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    navigate("/cart");
  };

  return (
    <div>
      {/* Product Details Section */}
      <section className="product-details-container">
        {/* Left Section - Product Image */}
        <div className="product-image">
          {/* <img src={selectedProduct.image} alt={selectedProduct.name} /> */}
          <img src={`/${selectedProduct.image}`} alt={selectedProduct.name} />
        </div>

        {/* Right Section - Product Information */}
        <div className="product-info">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p className="price">{selectedProduct.price}</p>
          {/* <Link to={`/product/${selectedProduct.name}`}> */}
          <button onClick={handleAddToCart}>Add to Cart</button>
          {/* </Link> */}
        </div>
      </section>
      {/* Cart Button
      <div className="cart-button">
        <Link to="/cart">Go to Cart</Link>
      </div> */}
    </div>
  );
};

export default ProductDetails;
