import { FC } from "react";
import { QuizProps, QuizSubTitle, QuizTitle } from "./Quiz";
import styles from "./styles.module.css";
import { Button } from "../Button/Button";

const Page3: FC<QuizProps> = ({ quizCount, setQuizCount }) => {
  const handleClick = () => {
    setQuizCount(quizCount + 1);
  };
  return (
    <div className={styles.quiz_page}>
      <div className={styles.quiz_header}>
        <h3 className={styles.quiz_title}>{QuizTitle}</h3>
        <p className={styles.quiz_subtitle}>{QuizSubTitle}</p>
      </div>
      <div className={`${styles.quiz_content} ${styles.quiz_content__3}`}>
        <h4 className={styles.question}>Уточните какие-либо моменты</h4>
        <textarea
          name=""
          id=""
          placeholder="Введите сообщение"
          cols={60}
          rows={10}
        />
      </div>
      <div className={styles.quiz_footer}>
        <p className={styles.quiz_progress}>3 из 3</p>
        <Button type="nextStep" onClick={handleClick}>
          Следующий шаг
        </Button>
      </div>
    </div>
  );
};

export default Page3;
