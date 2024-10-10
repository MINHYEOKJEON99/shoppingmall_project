import { useParams } from "react-router";
import BreadCrumb from "../common/Breadcrumb";
import styles from "./ItemDetail.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { productsList } from "../../store/products";
import { useContext } from "react";
import { ThemeContext } from "../../store/themeStore";
import clsx from "clsx";
import { addFromCart, cartState } from "../../store/cart";
import { Link } from "react-router-dom";

export default function ItemDetail() {
  const params = useParams();
  const products = useRecoilValue(productsList);
  const [cart, setCart] = useRecoilState(cartState);
  const item = products.filter((item) => String(item.id) === params.id)[0];
  const { lightTheme } = useContext(ThemeContext);

  function onClickCart() {
    setCart(addFromCart(cart, item.id));
    console.log(cart);
  }

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={item.category} crumb={item.title} />
      <div className={styles.itemContainer}>
        <figure className={styles.itemImg}>
          <img src={item.image} alt="이미지" />
        </figure>
        <div className={styles.descriptionContainer}>
          <div className={styles.titleContainer}>
            <h2 className={clsx(styles.itemTitle, { [styles.darkColor]: !lightTheme })}>{item.title}</h2>
            <span className={styles.New}>New</span>
          </div>
          <p className={clsx(styles.description, { [styles.darkColor]: !lightTheme })}>{item.description}</p>
          <div></div>
          <p className={clsx(styles.price, { [styles.darkColor]: !lightTheme })}>${Math.ceil(item.price)}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={onClickCart}>
              장바구니에 담기
            </button>
            <Link to={"/cart"}>
              <div className={clsx(styles.moveButton, { [styles.darkColor]: !lightTheme })}>장바구니로 이동</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
