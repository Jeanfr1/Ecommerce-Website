import React, { useState } from "react";
import styles from "./ProductDetailPage.module.css";

const ProductDetailPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {};

  return (
    <div className={styles.productDetailPage}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className={styles.productOptions}>
          <label htmlFor="quantity">Quantidade: </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
