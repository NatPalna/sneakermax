import styles from "./styles.module.css";
import { Button } from "../Button/Button";

const Hero = () => {
  return (
    <section className={`violet_section ${styles.hero}`}>
      <div className={`container ${styles.hero_container}`}>
        <h1 className={styles.title}>
          Кроссовки известных брендов с&nbsp;доставкой по&nbsp;России и&nbsp;СНГ
        </h1>
        <div className={styles.description}>
          Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse
          и&nbsp;многие другие по&nbsp;низким ценам
        </div>
        <a href="#catalog">
          <Button type="toShopping">Перейти к покупкам</Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
