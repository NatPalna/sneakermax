import styles from "./styles.module.css";
import toolTip from "../../assets/img/ViewTooltip.svg";
import ellipse from "../../assets/img/Ellipse.svg";
import vk from "../../assets/img/VK.svg";
import inst from "../../assets/img/Instagram.svg";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.l_col}>
          <h1 className="title title__grey">Контакты</h1>
          <div className={styles.office}>
            <div className={styles.title}>
              главный офис
              <div className={styles.tooltip_wrapper}>
                <span className={styles.tooltip_text}>
                  Адрес и телефон для корреспонденции, инвесторов. Вопросы о
                  доставке, качестве обслуживания и товара просьба задавать в
                  отдел продаж
                </span>
                <img src={ellipse} className={styles.ellipse} />

                <img
                  src={toolTip}
                  alt="Справка"
                  className={styles.tooltip_img}
                />
              </div>
            </div>
            <p className={styles.phone}>&#43;7 800 789 89 89</p>
            <p className={styles.address}>
              г. Санкт-Петербург, Комсомольская, 43 к1
            </p>
          </div>
          <div className={styles.sales}>
            <div className={styles.title}>отдел продаж</div>
            <p className={styles.phone}>&#43;7 800 789 89 89</p>
            <p className={styles.address}>
              г. Санкт-Петербург, Комсомольская, 43 к1
            </p>
          </div>
          <div className={styles.social}>
            <a href="">
              <img src={vk} alt="" />
            </a>
            <a href="">
              <img src={inst} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.r_col}>
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CDgMV45F"
            frameBorder={0}
            className={styles.map}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
