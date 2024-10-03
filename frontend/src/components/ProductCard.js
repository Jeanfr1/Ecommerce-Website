// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product._id}`}>
        <img
          src={process.env.REACT_APP_BACKEND_URL + product.image}
          alt={product.name}
          className={styles.productImage}
        />
      </Link>
      <div className={styles.productDetails}>
        <h3>{product.name}</h3>
        <p>{product.price} €</p>
      </div>
    </div>
  );
};

export default ProductCard;
