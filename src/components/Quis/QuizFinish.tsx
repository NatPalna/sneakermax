import { QuizFinishSubTitle, QuizFinishTitle } from "./Quiz";
import styles from "./styles.module.css";
import { Button } from "../Button/Button";

const QuizFinish = () => {
  return (
    <div className={styles.quiz_page}>
      <div className={styles.quiz_finish_header}>
        <h3 className={styles.quiz_title}>{QuizFinishTitle}</h3>
        <p className={`${styles.quiz_subtitle} ${styles.quiz_finish_subtitle}`}>
          {QuizFinishSubTitle}
        </p>
      </div>
      <div className={`${styles.quiz_content} ${styles.quiz_finish_content}`}>
        <form action="" className={styles.quiz_form}>
          <h4 className={styles.form_title}>Получить предложение</h4>
          <p className={styles.form_subtitle}>
            Получите подборку подходящих для вас моделей на почту
          </p>
          <input
            type="text"
            placeholder="Ваше имя"
            className={styles.quiz_form__input}
          />
          <input
            type="email"
            placeholder="E-mail"
            className={styles.quiz_form__input}
          />
          <Button
            type="quizFinish"
            children="Получить"
            actionType="submit"
          ></Button>
        </form>
      </div>
    </div>
  );
};

export default QuizFinish;
