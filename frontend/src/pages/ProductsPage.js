import React from "react";
import ProductCard from "../components/ProductCard";
import styles from "./ProductsPage.module.css";

const ProductsPage = ({ products }) => {
  return (
    <div className={styles.productsPage}>
      <h1 className={styles.title}>Nossos Produtos</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
