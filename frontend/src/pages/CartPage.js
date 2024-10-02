import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartReducer";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className={styles.cartPage}>
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul className={styles.cartItems}>
          {cartItems.map((item) => (
            <li key={item._id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price} €</p>
              <button onClick={() => dispatch(removeFromCart(item._id))}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
