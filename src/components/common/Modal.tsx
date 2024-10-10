import { useRecoilState } from "recoil";
import styles from "./Modal.module.css";
import { allDeleteFromCart, cartState } from "../../store/cart";

export default function Modal({ onClick }) {
  const [cart, setCart] = useRecoilState(cartState);

  function purchase() {
    setCart(allDeleteFromCart);
    onClick();
  }

  return (
    <div className={styles.modalBackground}>
      <div className={styles.container}>
        <h3 className={styles.title}>정말로 구매하시겠습니까?</h3>
        <p className={styles.description}>장바구니의 모든 상품들이 삭제됩니다.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.yesButton} onClick={purchase}>
            네
          </button>
          <button className={styles.noButton} onClick={onClick}>
            아니오
          </button>
        </div>
      </div>
    </div>
  );
}
