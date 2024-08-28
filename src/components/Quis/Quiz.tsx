import { useState } from "react";
import styles from "./styles.module.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import QuizFinish from "./QuizFinish";

export const QuizTitle = "Мы подберем идеальную пару для вас";
export const QuizSubTitle =
  "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями ";
export const QuizFinishTitle = "Ваша подборка готова!";
export const QuizFinishSubTitle =
  "Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог";

export type QuizProps = {
  quizCount: number;
  setQuizCount: any;
};

const Quiz = () => {
  const [quizCount, setQuizCount] = useState(1);
  return (
    <section className={styles.section} id="quiz">
      <div className="container">
        {quizCount === 1 && (
          <Page1 quizCount={quizCount} setQuizCount={setQuizCount} />
        )}
        {quizCount === 2 && (
          <Page2 quizCount={quizCount} setQuizCount={setQuizCount} />
        )}
        {quizCount === 3 && (
          <Page3 quizCount={quizCount} setQuizCount={setQuizCount} />
        )}
        {quizCount === 4 && <QuizFinish />}
        {/* <Page1 quizCount={quizCount} setQuizCount={setQuizCount} />
        <Page2 />
        <Page3 />
        <QuizFinish /> */}
      </div>
    </section>
  );
};

export default Quiz;

// сделать 4 компонентов по количеству вопросов
// в родительском компоненте завести useState со счетчиком
// выводить компоненты в зависимости от состояния счетчика
// по умолчанию показываем 1-ый
// по кнопке меняем состояние счетчика на 2
// условный рендеринг
// добавить анимацию для появления компонентов, хотя бы задержку
