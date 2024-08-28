import React from "react";
import styles from "./styles.module.css";

interface Props {
  className?: string;
  onClick?: () => void;
  type?: "view" | "toCart";
}

export const btnViewImg = "./img/btnView.svg";
export const btnToCartImg = "./img/btnToCart.svg";

const ButtonR: React.FC<Props> = ({ className, type, onClick }) => {
  const cssClass = [styles.button, className];

  switch (type) {
    case "view":
      cssClass.push(styles.view);
      break;
    case "toCart":
      cssClass.push(styles.toCart);
      break;
  }

  return (
    <button
      className={`${cssClass.join(" ")} ${styles.buttonR}`}
      onClick={onClick}
    ></button>
  );
};

export default ButtonR;
