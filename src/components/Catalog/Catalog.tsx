import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { getSneakers } from "../../Redux/slices/sliceSneakers";
import { ReqeustStatus } from "../../types";

const Catalog = () => {
  const dispatch = useDispatch<AppDispatch>();

  const sneakers = useSelector((state: RootState) => state.sneakers.data);
  const status = useSelector((state: RootState) => state.sneakers.status);
  const error = useSelector((state: RootState) => state.sneakers.error);

  const [showMore, setShowMore] = useState(6);

  useEffect(() => {
    dispatch(getSneakers());
    console.log(sneakers);
  }, []);

  const handleShowMore = () => {
    if (showMore < sneakers.length) {
      setShowMore((prev) => prev + 6);
    }
  };

  return (
    <section className={styles.catalog} id="catalog">
      <div className={`container ${styles.container}`}>
        <h2 className="title title__grey">Каталог</h2>
        <div className={styles.inner}>
          <CatalogFilter />
          <div className={styles.catalog_items}>
            {status === ReqeustStatus.LOADING && <p>Загружаем данные...</p>}
            {status === ReqeustStatus.SUCCESS &&
              sneakers
                .slice(0, showMore)
                .map((item) => (
                  <CatalogItem
                    key={`catalogitem-${item.id}`}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    imgUrl={item.imgUrl}
                  />
                ))}
            {status === ReqeustStatus.ERROR && <p>{error}</p>}
            {showMore < sneakers.length && (
              <Button type="showMore" onClick={handleShowMore}>
                Показать ещё
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
