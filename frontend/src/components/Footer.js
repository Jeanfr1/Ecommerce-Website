import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Siga a magia!</p>
        <div className={styles.socialIcons}>
          <FaFacebook />
          <FaPinterest />
          <FaInstagram />
        </div>
      </div>
      <p>© 2024 Marie Laidin. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
