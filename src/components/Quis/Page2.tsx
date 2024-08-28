import { FC } from "react";
import { QuizProps, QuizSubTitle, QuizTitle } from "./Quiz";
import styles from "./styles.module.css";
import image from "../../assets/img/quiz_q2.jpg";
import { Button } from "../Button/Button";

const Page2: FC<QuizProps> = ({ quizCount, setQuizCount }) => {
  // function handleClick() {
  //   setQuizCount(quizCount + 1);
  //   console.log(quizCount);
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
      <div className={`${styles.quiz_content} ${styles.quiz_content__2}`}>
        <h4 className={styles.question}>Какой размер вам подойдет?</h4>
        <div className={styles.answers2}>
          <input type="checkbox" name="size" id="a1" className={styles.input} />
          <label htmlFor="a1">менее 36</label>
        </div>
        <div className={styles.answers2}>
          <input type="checkbox" name="size" id="a2" className={styles.input} />
          <label htmlFor="a2">36-38</label>
        </div>
        <div className={styles.answers2}>
          <input type="checkbox" name="size" id="a3" className={styles.input} />
          <label htmlFor="a3">39-41</label>
        </div>
        <div className={styles.answers2}>
          <input type="checkbox" name="size" id="a4" className={styles.input} />
          <label htmlFor="a4">42-44</label>
        </div>
        <div className={styles.answers2}>
          <input type="checkbox" name="size" id="a5" className={styles.input} />
          <label htmlFor="a5">45 и больше</label>
        </div>
        <img src={image} alt="Подбор" className={styles.image} />
      </div>
      <div className={styles.quiz_footer}>
        <p className={styles.quiz_progress}>2 из 3</p>
        <Button type="nextStep" onClick={handleClick}>
          Следующий шаг
        </Button>
      </div>
    </div>
  );
};

export default Page2;
