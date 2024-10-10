import { useContext, useState } from "react";
import styles from "./Nav.module.css";
import clsx from "clsx";
import { ThemeContext } from "../../store/themeStore";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GrSun } from "react-icons/gr";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "../common/SearchBar";
import { useRecoilValue } from "recoil";
import { cartList } from "../../store/cart";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  const { lightTheme, changeTheme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const cart = useRecoilValue(cartList);
  const cartNum = Object.keys(cart).reduce((acc, cur) => (acc += cart[cur].count), 0);

  function onClickVisible() {
    setVisible(!visible);
  }

  let modal = (
    <div className={styles.modalBackground} onClick={onClickVisible}>
      <div className={styles.modalContainer}>
        <h1>
          <Link to={"/"} className={styles.modalMain}>
            React Shop
          </Link>
        </h1>
        <Link to={"/fashion"} className={styles.link}>
          패션
        </Link>
        <Link to={"/accessory"} className={styles.link}>
          액세서리
        </Link>
        <Link to={"digital"} className={styles.link}>
          디지털
        </Link>
      </div>
    </div>
  );

  return (
    <nav className={clsx(styles.wrapper, { [styles.darkWrapper]: !lightTheme })}>
      {visible && modal}
      <div className={styles.container}>
        <button className={styles.hamburger}>
          <RxHamburgerMenu onClick={onClickVisible} size={"24px"} color={!lightTheme ? "#fff" : "black"} />
        </button>
        <h1>
          <Link to={"/"} className={clsx(styles.main, { [styles.darkFont]: !lightTheme })}>
            React Shop
          </Link>
        </h1>
        <div className={styles.menuContainer}>
          <Link to={"/fashion"} className={clsx(styles.menu, { [styles.darkFont]: !lightTheme })}>
            패션
          </Link>
          <Link to={"/accessory"} className={clsx(styles.menu, { [styles.darkFont]: !lightTheme })}>
            액세서리
          </Link>
          <Link to={"/digital"} className={clsx(styles.menu, { [styles.darkFont]: !lightTheme })}>
            디지털
          </Link>
        </div>
        <div className={styles.searchbarContainer}>
          <button onClick={() => changeTheme()} className={clsx(styles.button, { [styles.buttonClick]: lightTheme })}>
            {lightTheme ? <FaRegMoon size={"28px"} /> : <GrSun size={"28px"} color="#fff" />}
          </button>
          <SearchBar />
          <Link to={"/cart"} className={styles.cart}>
            <span className={styles.cartNum}>{cartNum}</span>

            <HiOutlineShoppingBag size={"24px"} color={!lightTheme ? "#fff" : "black"} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
