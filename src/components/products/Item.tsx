import clsx from "clsx";
import styles from "./Item.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../store/themeStore";

interface Props {
  image: string;
  itemTitle: string;
  price: string | number;
}

export default function Item({ image, itemTitle, price }: Props) {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <div className={clsx(styles.container, { [styles.darkBorder]: !lightTheme })}>
      <figure className={styles.item}>
        <img src={image} alt="상품" />
      </figure>
      <div className={clsx(styles.itemDescription, { [styles.darkDescription]: !lightTheme })}>
        <div className={clsx(styles.itemTitle, { [styles.darkFont]: !lightTheme })}>{itemTitle}</div>
        <p className={clsx(styles.price, { [styles.darkFont]: !lightTheme })}>${Math.ceil(Number(price))}</p>
      </div>
    </div>
  );
}
