import { FC } from "react";
import { QuizProps, QuizSubTitle, QuizTitle } from "./Quiz";
import styles from "./styles.module.css";
import image from "../../assets/img/quiz_q1.jpg";
import { Button } from "../Button/Button";

const Page1: FC<QuizProps> = ({ quizCount, setQuizCount }) => {
  // function handleClick():MouseEventHandler<HTMLButtonElement> {() => {
  //   setQuizCount(quizCount + 1);
  // }
  const handleClick = () => {
    setQuizCount(quizCount + 1);
  };
  return (
    <div className={styles.quiz_page}>
      <div className={styles.quiz_header}>
        <h3 className={styles.quiz_title}>{QuizTitle}</h3>
        <p className={styles.quiz_subtitle}>{QuizSubTitle}</p>
      </div>
      <div className={`${styles.quiz_content} ${styles.quiz_content__1}`}>
        <h4 className={styles.question}>Какой тип кроссовок рассматриваете?</h4>
        <div className={styles.answers}>
          <img src={image} alt="Иллюстрация" className={styles.image} />
          <input type="checkbox" name="cedy" id="a1" className={styles.input} />
          <label htmlFor="a1">кеды</label>
        </div>
        <div className={styles.answers}>
          <img src={image} alt="Иллюстрация" className={styles.image} />
          <input type="checkbox" name="cedy" id="a2" className={styles.input} />
          <label htmlFor="a2">кеды</label>
        </div>
        <div className={styles.answers}>
          <img src={image} alt="Иллюстрация" className={styles.image} />
          <input type="checkbox" name="cedy" id="a3" className={styles.input} />
          <label htmlFor="a3">кеды</label>
        </div>
        <div className={styles.answers}>
          <img src={image} alt="Иллюстрация" className={styles.image} />
          <input type="checkbox" name="cedy" id="a4" className={styles.input} />
          <label htmlFor="a4">кеды</label>
        </div>
        <div className={styles.answers}>
          <img src={image} alt="Иллюстрация" className={styles.image} />
          <input type="checkbox" name="cedy" id="a5" className={styles.input} />
          <label htmlFor="a5">кеды</label>
        </div>
        <div className={styles.answers}>
          <img src={image} alt="Иллюстрация" className={styles.image} />
          <input type="checkbox" name="cedy" id="a6" className={styles.input} />
          <label htmlFor="a6">кеды</label>
        </div>
      </div>
      <div className={styles.quiz_footer}>
        <p className={styles.quiz_progress}>1 из 3</p>
        <Button type="nextStep" onClick={handleClick}>
          Следующий шаг
        </Button>
      </div>
    </div>
  );
};

export default Page1;
