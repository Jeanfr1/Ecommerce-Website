import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.productPage}>
      <img src={product.image} alt={product.name} />
      <div className={styles.productDetails}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>{product.price} €</h3>
        <button>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ProductPage;
