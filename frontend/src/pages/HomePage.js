// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import styles from "./HomePage.module.css";
import testimonials from "../data/testimonials";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/products`
        );
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.homePage}>
      {/* Seção de Produtos */}
      <section className={styles.productsSection}>
        <h2>Nossos Produtos</h2>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      {/* Seção de Testemunhos */}
      <section className={styles.testimonialsSection}>
        <h2>O que nossos clientes dizem</h2>
        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <blockquote>{testimonial.quote}</blockquote>
              <p className={styles.author}>- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
