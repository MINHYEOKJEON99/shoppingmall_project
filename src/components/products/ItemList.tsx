import { useRecoilValue } from "recoil";
import { productsList } from "../../store/products";
import styles from "./ItemList.module.css";
import Item from "./Item";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../store/themeStore";
import { Link, useLocation } from "react-router-dom";

interface Props {
  title: string;
  count?: number;
}

interface categoryType {
  fashion: string[];
  accessory: string[];
  digital: string[];
}

export default function ItemList({ title, count }: Props): JSX.Element {
  const { pathname } = useLocation();
  const productList = useRecoilValue(productsList);
  const { lightTheme } = useContext(ThemeContext);

  let containerStyle = pathname === "/" ? styles.itemContainerMain : styles.itemContainerCategory;
  let itemTitle = "패션";

  if (title === "fashion") {
    itemTitle = "패션";
  } else if (title === "accessory") {
    itemTitle = "액세서리";
  } else {
    itemTitle = "디지털";
  }

  // const category = title === '패션' && ("men's clothing" || "women's clothing")
  const category: categoryType = {
    fashion: ["men's clothing", "women's clothing"],
    accessory: ["jewelery"],
    digital: ["electronics"],
  };
  const filterList = count
    ? productList.filter((item) => category[title]?.includes(item.category)).slice(0, count)
    : productList.filter((item) => category[title]?.includes(item.category));

  return (
    <>
      <h2 className={clsx(styles.title, { [styles.dark]: !lightTheme })}>{itemTitle}</h2>
      <div className={clsx(styles.itemContainer, containerStyle)}>
        {filterList.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <Item image={item.image} itemTitle={item.title} price={item.price} />
          </Link>
        ))}
      </div>
    </>
  );
}
