import React from "react";
import styles from "./TestimonialsPage.module.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Oh, que prazer em receber nossos faire-part e enviá-los. Agradecemos as inúmeras modificações para que tivéssemos o faire-part ideal!",
    author: "Cliente SO",
  },
  {
    id: 2,
    quote: "Produtos maravilhosos e atendimento excelente. Muito obrigado!",
    author: "Cliente Maria",
  },
];

const TestimonialsPage = () => {
  return (
    <div className={styles.testimonialsPage}>
      <h1 className={styles.title}>O que nossos clientes dizem</h1>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonial}>
            <blockquote>{testimonial.quote}</blockquote>
            <p className={styles.author}>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
