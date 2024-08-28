import React from "react";
import styles from "./styles.module.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
  type?:
    | "toShopping"
    | "showMore"
    | "applyFilter"
    | "resetFilter"
    | "nextStep"
    | "toCart" // перейти в корзину в модалке корзины
    | "checkout"
    | "order" // заказать в карточке продукта (модалка и страница продукта)
    | "quizFinish"
    | "anyQuestions"
    | "placeAnOrder"; // оформить заказ на модалке корзины и в окне корзины
  onClick?: () => void;
  width?: string;
  title?: string;
  actionType?: "button" | "submit" | "reset";
};

export const Button: React.FC<Props> = ({
  children,
  className,
  type,
  onClick,
  width,
  title,
  actionType,
}) => {
  const cssClass = [styles.button, className];

  switch (type) {
    case "toShopping":
      cssClass.push(styles.toShopping);
      break;
    case "showMore":
      cssClass.push(styles.showMore);
      break;
    case "applyFilter":
      cssClass.push(styles.applyFilter);
      break;
    case "resetFilter":
      cssClass.push(styles.resetFilter);
      break;
    case "nextStep":
      cssClass.push(styles.nextStep);
      break;
    case "toCart":
      cssClass.push(styles.toCart);
      break;
    case "checkout":
      cssClass.push(styles.checkout);
      break;
    case "order":
      cssClass.push(styles.order);
      break;
    case "quizFinish":
      cssClass.push(styles.quizFinish);
      break;
    case "anyQuestions":
      cssClass.push(styles.anyQuestions);
      break;
    case "placeAnOrder":
      cssClass.push(styles.placeAnOrder);
      break;
  }
  return (
    <button
      type={actionType ? actionType : "button"}
      className={cssClass.join(" ")}
      onClick={onClick}
      title={title}
      style={{ width: `${width}` }}
    >
      {children}
    </button>
  );
};
