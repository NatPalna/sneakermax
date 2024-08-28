import styles from "./styles.module.css";
import "react-accordion-ts/src/panel.css";
import { NewFAQ } from "./Accordion";

const FAQ = () => {
  return (
    <section className={styles.faq}>
      <div className="container">
        <h3 className="title title__grey">Часто задаваемые вопросы</h3>
        <div className={styles.accordion}>
          <NewFAQ />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
