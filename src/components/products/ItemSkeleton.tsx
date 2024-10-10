import clsx from "clsx";
import styles from "./ItemSkeleton.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../store/themeStore";
import Skeleton from "react-loading-skeleton";

export default function ItemSkeleton() {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <div className={clsx(styles.container, { [styles.darkBorder]: !lightTheme })}>
      <Skeleton className={styles.item} />
      <div className={clsx(styles.itemDescription, { [styles.darkDescription]: !lightTheme })}>
        <Skeleton className={clsx(styles.itemTitle, { [styles.darkFont]: !lightTheme })} />
        <Skeleton className={clsx(styles.price, { [styles.darkFont]: !lightTheme })} />
      </div>
    </div>
  );
}
