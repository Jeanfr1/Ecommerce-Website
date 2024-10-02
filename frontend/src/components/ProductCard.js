import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} €</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;
