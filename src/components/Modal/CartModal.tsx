import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { sliceCart } from "../../Redux/slices/sliceCart";
import { Modal } from "react-bootstrap";
import styles from "./style.module.css";
import trash from "../../assets/img/trash.svg";
import { Button } from "../Button/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CartModal = () => {
  const isOpen = useSelector((state: RootState) => state.cart.isOpenModal);

  const items = useSelector((state: RootState) => state.cart.itemsInCart);

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const router = useNavigate();

  useEffect(() => {
    dispatch(sliceCart.actions.getInitialState());
  }, []);

  if (!isOpen) return null;

  return (
    <Modal
      show={isOpen}
      onHide={() => {
        dispatch(sliceCart.actions.closeModal());
      }}
    >
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <div className={styles.cart_items}>
            {items.map((item) => (
              <div key={item.id} className={styles.cart_item}>
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className={styles.cart_img}
                />
                <div className={styles.cart_item_text}>
                  <p className={styles.cart_item_title}>{item.title}</p>
                  <p className={styles.cart_item_price}>{item.price} ₽</p>
                </div>
                <button
                  onClick={() => {
                    dispatch(sliceCart.actions.removeFromCart(item.id));
                  }}
                  className={styles.cart_item_trash}
                >
                  <img src={trash} alt="Удалить из корзины" />
                </button>
              </div>
            ))}
          </div>
          <div className={styles.cart_footer}>
            <div className={styles.cart_total}>
              <p className={styles.cart_total_title}>Итого:</p>
              <p className={styles.cart_total_price}>
                {totalPrice.toLocaleString("ru-RU")} ₽
              </p>
            </div>
            <Button
              type="toCart"
              children="Перейти в корзину"
              onClick={() => {
                router("/sneakermax/cart");
                dispatch(sliceCart.actions.closeModal());
              }}
            ></Button>
          </div>
        </>
      )}
    </Modal>
  );
};
