import React, { useState } from "react";
import axios from "axios";

function Ecommerce() {
  const productsStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const productStyle = {
    width: "22%",
    height: "400px",
    margin: "2rem 1rem",
  };

  const imgStyle = {
    width: "100%",
    height: "70%",
  };

  const [products, setProducts] = useState([]);

  function getEcommerceData() {
    return axios.get("https://fakestoreapi.com/products").then((result) => {
      setProducts(result.data);
    });
  }

  function trimDescription(desc) {
    return desc.length > 100 ? desc.slice(0, 100) + "..." : desc;
  }

  return (
    <>
      <button onClick={getEcommerceData}>Get Ecommerce Data</button>
      <div className="products" style={productsStyle}>
        {products.map((product, index) => {
          return (
            <div className="product" key={index} style={productStyle}>
              <img src={product.image} alt={product.name} style={imgStyle} />
              <h3>{product.title}</h3>
              <p>{trimDescription(product.description)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Ecommerce;
