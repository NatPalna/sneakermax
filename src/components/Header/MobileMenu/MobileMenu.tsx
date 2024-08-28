import { useState } from "react";
import styles from "./styles.module.css";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { NavHashLink } from "react-router-hash-link";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container_mobile}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.mobile_menu}>
          <nav className={styles.nav}>
            <NavHashLink
              to="/sneakermax#catalog"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Каталог
            </NavHashLink>
            <NavHashLink
              to="/sneakermax#aboutus"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              О нас
            </NavHashLink>
            <NavHashLink
              to="/sneakermax#quiz"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Подбор товара
            </NavHashLink>
            <NavHashLink
              to="/sneakermax#team"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Наша команда
            </NavHashLink>
            <NavHashLink
              to="/sneakermax"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Доставка и оплата
            </NavHashLink>
            <NavHashLink
              to="/sneakermax#contacts"
              className={styles.nav__link}
              onClick={handleLinkClick}
            >
              Контакты
            </NavHashLink>
          </nav>
        </div>
      )}
    </div>
  );
};
