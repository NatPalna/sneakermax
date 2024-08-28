import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import ButtonR from "../ButtonR/ButtonR";
import { CatalogItemProps } from "../../types";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../Redux/store";
import { addToCart } from "../../Redux/slices/sliceCart";
import { useNavigate } from "react-router-dom";

const CatalogItem: React.FC<CatalogItemProps> = ({
  imgUrl,
  title,
  price,
  id,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, imgUrl }));
  };

  return (
    <>
      <div className={styles.catalog_item}>
        <Link to={`/sneakermax/catalog/${id}`}>
          <img src={imgUrl} alt="" className={styles.catalog_item__img} />
        </Link>
        <p className={styles.catalog_item__title}>{title}</p>
        <p className={styles.catalog_item__price}>{price} р</p>
        <div className={styles.catalog_item__buttons}>
          <ButtonR
            type="view"
            onClick={() => router(`/sneakermax/catalog/${id}`)}
          />
          <ButtonR type="toCart" onClick={handleAddToCart} />
        </div>
      </div>
    </>
  );
};

export default CatalogItem;
