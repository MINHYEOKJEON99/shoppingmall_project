import { useRecoilState, useRecoilValue } from "recoil";
import { productsList } from "../../store/products";
import styles from "./CartItem.module.css";
import { ICartState, addFromCart, cartState, removeFromCart } from "../../store/cart";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../store/themeStore";

export default function CartItem({ id, count }) {
  const [cart, setCart] = useRecoilState<ICartState>(cartState);
  const { lightTheme } = useContext(ThemeContext);

  // store/cart.ts를 참고하세요.
  const removeFromCartHandler = (id: number) => {
    setCart(removeFromCart(cart, id));
  };

  const addFromCartHandler = (id: number) => {
    setCart(addFromCart(cart, id));
  };
  const products = useRecoilValue(productsList);
  const item = products.filter((item) => item.id === id)[0];

  return (
    <div className={styles.container}>
      <Link to={`/product/${id}`}>
        <figure className={styles.itemImg}>
          <img src={item.image} alt="상품" />
        </figure>
      </Link>
      <div className={styles.itemContainer}>
        <h2 className={clsx(styles.title, { [styles.darkColor]: !lightTheme })}>{item.title}</h2>
        <p className={clsx(styles.price, { [styles.darkColor]: !lightTheme })}>
          ${Math.ceil(item.price) * count}{" "}
          <span className={clsx(styles.onePrice, { [styles.darkColor]: !lightTheme })}>(${Math.ceil(item.price)})</span>
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.minusButton} onClick={removeFromCartHandler.bind(null, id)}>
            -
          </button>
          <button className={clsx(styles.count, { [styles.darkColor]: !lightTheme })}>{count}</button>
          <button className={styles.plusButton} onClick={addFromCartHandler.bind(null, id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
