import styles from "./styles.module.css";
import { Button } from "../Button/Button";
import inst from "../../assets/img/Instagram_textLogo.svg";
import AQ1 from "../../assets/img/AQ1.jpg";
import AQ2 from "../../assets/img/AQ2.jpg";
import AQ3 from "../../assets/img/AQ3.jpg";
import AQ4 from "../../assets/img/AQ4.jpg";
import AQ5 from "../../assets/img/AQ5.jpg";

const AnyQuestions = () => {
  return (
    <section className={`section ${styles.any_questions}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.l_col}>
          <form action="" className={styles.form}>
            <h3 className={styles.form_title}>Есть вопросы?</h3>
            <p className={styles.form_subtitle}>
              Заполните форму и наш
              <br /> менеджер свяжется с вами
            </p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ваше имя"
              className={styles.input}
            />
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Номер телефона"
              className={styles.input}
            />
            <Button type="anyQuestions" children={"Отправить"}></Button>
          </form>
        </div>
        <div className={styles.r_col}>
          <img src={inst} alt="Instagram" className={styles.inst} />
          <div className={styles.images}>
            <img src={AQ1} alt="Иллюстрация" className={styles.img} />
            <img src={AQ2} alt="Иллюстрация" className={styles.img} />
            <img src={AQ3} alt="Иллюстрация" className={styles.img} />
            <img src={AQ4} alt="Иллюстрация" className={styles.img} />
            <img src={AQ5} alt="Иллюстрация" className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnyQuestions;
