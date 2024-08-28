import styles from "./styles.module.css";
import { NavHashLink } from "react-router-hash-link";

export const DesktopMenu = () => {
  return (
    <nav className={styles.nav}>
      <NavHashLink to="/sneakermax#catalog" className={styles.nav__link}>
        Каталог
      </NavHashLink>
      <NavHashLink to="/sneakermax#aboutus" className={styles.nav__link} smooth>
        О нас
      </NavHashLink>
      <NavHashLink to="/sneakermax#quiz" className={styles.nav__link}>
        Подбор товара
      </NavHashLink>
      <NavHashLink to="/sneakermax#team" className={styles.nav__link}>
        Наша команда
      </NavHashLink>
      <NavHashLink to="/sneakermax#contacts" className={styles.nav__link}>
        Доставка и оплата
      </NavHashLink>
    </nav>
  );
};
