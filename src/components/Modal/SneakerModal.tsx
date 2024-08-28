import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Sneaker } from "../../types";
import styles from "../../pages/Catalog/style.module.css";
import star from "../../assets/img/Star.svg";
import { Button } from "../../components/Button/Button";

type Props = {
  showSneakerModal: boolean;
  setShowSneakerModal: (showSneakerModal: boolean) => void;
};

export const SneakerModal: FC<Props> = ({
  showSneakerModal,
  setShowSneakerModal,
}) => {
  const handleCloseSneakerModal = () => setShowSneakerModal(false);

  const params = useParams();
  const [sneakerData, setSneakerData] = useState<Sneaker | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://ccff8437a2e9121c.mokky.dev/items/${params.id}`
        );

        const data = await req.json();

        setSneakerData(data);
      } catch (error) {
        console.log("error-> ", error);
      }
    };

    getData();
  }, []);

  return (
    <Modal show={showSneakerModal} onHide={handleCloseSneakerModal}>
      <Modal.Body>
        <div className={`container ${styles.container}`}>
          {sneakerData && (
            <>
              <img
                src={sneakerData.imgUrl}
                alt={sneakerData.title}
                className={styles.product_img}
              />
              <div className={styles.product_title}>
                <div className={styles.title_info}>
                  <div className={styles.vendorcode}>
                    Артикул: {sneakerData.vendorСode}
                  </div>
                  <div className={styles.instock_wrapper}>
                    В наличии:{" "}
                    <span className={styles.instock}>
                      {sneakerData.inStock} шт
                    </span>
                  </div>
                </div>
                <p className={styles.subtitle}>{sneakerData.title}</p>
                <div className={styles.stars}>
                  {sneakerData.stars === 1 && <img src={star} alt="star" />}
                  {sneakerData.stars === 2 && (
                    <>
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </>
                  )}
                  {sneakerData.stars === 3 && (
                    <>
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </>
                  )}
                  {sneakerData.stars === 4 && (
                    <>
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </>
                  )}
                  {sneakerData.stars === 5 && (
                    <>
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </>
                  )}
                </div>
              </div>
              <div className={styles.product_info}>
                <div className={styles.product_size}>
                  Выберите размер:{" "}
                  <div className={styles.size_wrapper}>
                    {/* {sneakerData.sizes.map((size) => (
                        <button value={size} className={styles.size}>
                          {size}
                        </button>
                      ))} */}
                  </div>
                </div>
                <div className={styles.product_price}>
                  <div className={styles.actual_price}>{sneakerData.price}</div>
                  <div className={styles.old_price}>{sneakerData.oldPrice}</div>
                </div>
                <Button type="order" children="Заказать"></Button>
                <ul className={styles.product_delivery}>
                  <li className={styles.delivery_item}>
                    Бесплатная доставка до двери
                  </li>
                  <li className={styles.delivery_item}>
                    Оплата заказа при получении
                  </li>
                  <li className={styles.delivery_item}>
                    Обмен в течении двух недель
                  </li>
                </ul>
              </div>

              <div className={styles.product_description}>
                <p className={styles.subtitle}>Описание</p>
                {sneakerData.description}
              </div>
              <div className={styles.product_characteristics}>
                <p className={styles.subtitle}>Характеристики</p>
                <p className={styles.character}>Пол: {sneakerData.gender}</p>
                <p className={styles.character}>Цвета: {sneakerData.color}</p>
                <p className={styles.character}>
                  Состав: {sneakerData.compound}
                </p>
                <p className={styles.character}>
                  Старана: {sneakerData.country}
                </p>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};
