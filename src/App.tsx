import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Drawer from "./components/common/Drawer";
import Nav from "./components/layout/Nav";
import { useContext } from "react";
import { ThemeContext } from "./store/themeStore";
import clsx from "clsx";
import styles from "./App.module.css";
import Footer from "./components/layout/Footer";

const App = (): JSX.Element => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className={clsx("drawer-content", styles.section, { [styles.dark]: !lightTheme })}>
        <Nav />
        <section className={clsx("main pt-16", styles.main)}>
          <Router />
        </section>
        <Footer />
      </section>
      <Drawer />
    </BrowserRouter>
  );
};

export default App;
