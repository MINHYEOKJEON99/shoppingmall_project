import clsx from "clsx";
import styles from "./SearchBar.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeStore";
import { useRecoilValue } from "recoil";
import { productsList } from "../../store/products";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const { lightTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const products = useRecoilValue(productsList);
  const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(value.toLocaleLowerCase()));

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function offVisible() {
    setVisible(false);
  }

  function onVisible() {
    setVisible(true);
  }

  function onClickList(id: number) {
    navigate(`/product/${id}`);
    setValue("");
    setVisible(false);
  }

  return (
    <div className={styles.searchbarForm}>
      <input
        type="text"
        className={clsx(styles.searchbar, { [styles.darkSearchbar]: !lightTheme })}
        placeholder="검색"
        onChange={onChangeHandler}
        onFocus={onVisible}
        value={value}
      />
      <ul className={styles.modal} onBlur={offVisible}>
        {value &&
          visible &&
          filteredProducts.map((item) => (
            <li key={item.id} className={styles.listItem} onClick={onClickList.bind(null, item.id)}>
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
