import { Link } from "react-router-dom";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import styles from "./CartView.module.css";
import CartList from "./CartList";
import { useRecoilValue } from "recoil";
import { cartList } from "../../store/cart";
import { productsList } from "../../store/products";
import clsx from "clsx";
import { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeStore";
import Modal from "../common/Modal";

const CartView = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const { lightTheme } = useContext(ThemeContext);
  const cartlist = useRecoilValue(cartList);
  const products = useRecoilValue(productsList);
  const filteredList = products.filter((item) => Object.keys(cartlist).includes(String(item.id)));
  const totalPrice = filteredList.reduce((acc, cur) => acc + Math.ceil(cur.price) * cartlist[cur.id].count, 0);

  function onClick() {
    setVisible(!visible);
  }

  return (
    <>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumb category="홈" crumb="장바구니" />
        <div className="mt-6 md:mt-14 px-2 lg:px-0">
          {Object.keys(cartlist).length !== 0 ? (
            <CartList filteredList={filteredList} />
          ) : (
            <div>
              <h1 className={clsx("text-2xl", { [styles.darkColor]: !lightTheme })}>장바구니에 물품이 없습니다.</h1>
              <Link to="/" className="btn btn-primary mt-10">
                담으러 가기
              </Link>
            </div>
          )}
          <div className={styles.priceContainer}>
            <span className={clsx(styles.price, { [styles.darkColor]: !lightTheme })}>총 : ${totalPrice}</span>
            <button className="btn btn-primary ml-5" onClick={onClick}>
              구매하기
            </button>
          </div>
        </div>
        <Confirm />
        {visible && <Modal onClick={onClick} />}
      </section>
    </>
  );
};

export default CartView;
