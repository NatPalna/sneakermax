import styles from "./styles.module.css";
import { NavHashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav__item}>
          <NavHashLink to="/sneakermax#catalog" className={styles.nav__link}>
            Каталог
          </NavHashLink>
        </li>
        <li className={styles.nav__item}>
          <NavHashLink to="/sneakermax#aboutus" className={styles.nav__link}>
            О нас
          </NavHashLink>
        </li>
        <li className={styles.nav__item}>
          <NavHashLink to="/sneakermax#quiz" className={styles.nav__link}>
            Подбор товара
          </NavHashLink>
        </li>
        <li className={styles.nav__item}>
          <NavHashLink to="/sneakermax#team" className={styles.nav__link}>
            Наша команда
          </NavHashLink>
        </li>
        <li className={styles.nav__item}>
          <NavHashLink to="/sneakermax" className={styles.nav__link}>
            Доставка и оплата
          </NavHashLink>
        </li>
        <li className={styles.nav__item}>
          <NavHashLink to="/sneakermax#contacts" className={styles.nav__link}>
            Контакты
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
