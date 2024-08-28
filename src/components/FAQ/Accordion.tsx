import { Accordion } from "react-accordion-ts";
import styles from "./styles.module.css";
import plus from "../../assets/img/FAQView.svg";

const news = [
  {
    title: "Вопрос 1",
    content:
      "А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми",
    open: false,
  },
  {
    title: "Вопрос 2",
    content:
      "А это ответ 2: в комплексе функционируют 7 детских садов с площадками, воспитателями и всякими другими людьми",
    open: false,
  },
];

const items = news.map(({ open, title, content }) => ({
  open,
  title: (
    <div className={styles.accordion_item_title}>
      <h4>{title}</h4>
      <img src={plus} alt="Показать/скрыть ответ" />
    </div>
  ),
  content: <p className={styles.accordion_item_content}>{content}</p>,
}));

export const NewFAQ = () => (
  <Accordion items={items} duration={300} multiple={false} />
);
