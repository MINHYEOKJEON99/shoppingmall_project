import { useContext } from "react";
import { Category } from "../../constants/category";
import { ThemeContext } from "../../store/themeStore";
import styles from "./Breadcrumb.module.css";
import clsx from "clsx";

interface IBreadCrumbsPros {
  readonly category?: string;
  readonly crumb?: string;
}
/**
 * 자주사용되는 부분은 BreadCrumb와 같은 공통 컴포넌트를 활용 해보세요.
 */
const BreadCrumb = ({ category = "", crumb = "" }: IBreadCrumbsPros): JSX.Element => {
  const resolveCategory = Category[category] || category;
  const { lightTheme } = useContext(ThemeContext);

  return (
    <div className={clsx("text-sm breadcrumbs", { [styles.color]: !lightTheme })}>
      <ul>
        <li>{resolveCategory}</li>
        <li>{crumb}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
