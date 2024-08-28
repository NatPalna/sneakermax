import styles from "./styles.module.css";
import abstract from "../../assets/img/AFewWords.svg";
import signature from "../../assets/img/cite.svg";
import img from "../../assets/img/AFewWords.png";

const AFewWords = () => {
  return (
    <section className={`violet_section ${styles.a_few_words}`} id="aboutus">
      <img src={abstract} alt="" className={styles.abstract} />
      <div className={`container ${styles.container}`}>
        <div className={styles.l_col}>
          <h2 className={`title title__white ${styles.title}`}>
            Пара слов о нас
          </h2>
          <div className={styles.description}>
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
          </div>
          <img src={signature} alt="" className={styles.signature} />
        </div>
        <div className={styles.r_col}>
          <img src={img} alt="" className={styles.img} />
        </div>
      </div>
    </section>
  );
};

export default AFewWords;
