import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SnsIcon.module.css";

export default function SnsIcon({ src, url, title }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <Link to={url} className={styles.link} onMouseOver={toggleModal} onMouseOut={toggleModal}>
      <img src={src} alt="facebook" width={24}></img>
      <div className={styles.tooltip}>{title}</div>
    </Link>
  );
}
