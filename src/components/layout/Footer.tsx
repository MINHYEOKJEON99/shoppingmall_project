import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import visa from "../../assets/img/svg/visa.svg";
import master from "../../assets/img/svg/master.svg";
import amex from "../../assets/img/svg/americanExpress.svg";
import paypal from "../../assets/img/svg/paypal.svg";
import dclub from "../../assets/img/svg/dinersClub.svg";
import discover from "../../assets/img/svg/discover.svg";
import instagram from "../../assets/img/svg/instagram-svgrepo-com.svg";
import github from "../../assets/img/svg/github-142-svgrepo-com.svg";
import facebook from "../../assets/img/svg/facebook-svgrepo-com.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeStore";
import clsx from "clsx";
import SnsIcon from "./SnsIcon";

export default function Footer() {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <footer className={clsx(styles.container, { [styles.darkContainer]: !lightTheme })}>
      <div className={styles.zerobase}>
        <Link to={"https://zero-base.co.kr/"}>
          <span className={clsx({ [styles.darkColor]: !lightTheme })}>제로베이스</span>
        </Link>
      </div>
      <ul className={styles.cardContainer}>
        <li>
          <img src={visa} alt="비자" />
        </li>
        <li>
          <img src={master} alt="마스터" />
        </li>
        <li>
          <img src={amex} alt="아메리칸익스프레스" />
        </li>
        <li>
          <img src={paypal} alt="페이팔" />
        </li>
        <li>
          <img src={dclub} alt="디너클럽" />
        </li>
        <li>
          <img src={discover} alt="디스커버" />
        </li>
      </ul>
      <div className={styles.snsContainer}>
        <SnsIcon title={"facebook"} src={facebook} url={"https://www.facebook.com/0base"} />
        <SnsIcon title={"instagram"} src={instagram} url={"https://www.instagram.com/zerobase.official"} />
        <SnsIcon title={"github"} src={github} url={"https://github.com/MINHYEOKJEON99"} />
      </div>

      <div>
        <p className={clsx(styles.copyright, { [styles.darkColor]: !lightTheme })}>Copyright © 2024 Zero Base</p>
      </div>
    </footer>
  );
}
