import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useEffect } from "react";
import { sliceCart } from "../../Redux/slices/sliceCart";
import styles from "./style.module.css";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "../../components/Button/Button";

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.itemsInCart);

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sliceCart.actions.getInitialState());
  }, []);

  return (
    <section>
      <div className={`container ${styles.cart_container}`}>
        <div className={styles.cart_header}>
          <h2 className={styles.cart_title}>Оформление заказа</h2>
          <p className={styles.cart_id}>Заказ 3456 67</p>
        </div>
        <div className={styles.cart_content}>
          <p className={styles.cart_text}>
            Товаров в заказе: <span>{items.length} шт</span>
          </p>
          <p className={styles.cart_text}>
            Общая сумма заказа: <span>{totalPrice} ₽</span>
          </p>
          <Accordion defaultActiveKey="0" flush alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Состав заказа</Accordion.Header>
              <Accordion.Body>
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
                        Удалить
                      </button>
                    </div>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <form className={styles.cart_form}>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.input}
            placeholder="Ваше имя"
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            className={styles.input}
            placeholder="Номер телефона"
          />
          <input
            type="email"
            name="email"
            id="email"
            className={styles.input}
            placeholder="E-mail"
          />
          <Button
            type="placeAnOrder"
            actionType="submit"
            children={"Оформить заказ"}
            onClick={() => dispatch(sliceCart.actions.clearCart())}
          ></Button>
        </form>
      </div>
    </section>
  );
};

export default Cart;
