import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Marie Laidin Faire-Part</h1>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
