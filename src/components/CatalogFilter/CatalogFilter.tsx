import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import styles from "./styles.module.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { Filter, Sneaker } from "../../types";
import { getSneakers, sliceSneakers } from "../../Redux/slices/sliceSneakers";

const CatalogFilter = () => {
  const [prices, setPrice] = useState({ min: 1850, max: 25678 });

  const appDispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();

  const stateSneakers = useSelector((state: RootState) => state.sneakers.data);

  const formFilter = (event: any) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    const newFilter: Filter = {
      startPrice: Number(data.startPrice),
      endPrice: Number(data.endPrice),
      male: data.male === "on",
      female: data.female === "on",
      sizes: {
        size35: data.size35 === "on",
        size36: data.size36 === "on",
        size37: data.size37 === "on",
        size38: data.size38 === "on",
        size39: data.size39 === "on",
        size40: data.size40 === "on",
        size41: data.size41 === "on",
        size42: data.size42 === "on",
        size43: data.size43 === "on",
      },
    };

    const priceFilteredSneakers = stateSneakers.filter((item: Sneaker) => {
      if (
        newFilter.startPrice < Number(item.price.replace(" ", "")) &&
        newFilter.endPrice > Number(item.price.replace(" ", ""))
      ) {
        return true;
      } else return false;
    });

    const genderFilteredSneakers = priceFilteredSneakers.filter(
      (item: Sneaker) => {
        console.log(newFilter, data);
        if (
          (newFilter.male && item.gender == "Мужской") ||
          (newFilter.female && item.gender == "Женский")
        ) {
          return true;
        } else return item;
      }
    );

    const sizeFilteredSneakers = genderFilteredSneakers.filter(
      (item: Sneaker) => {
        console.log(getSizes(newFilter));
        if (getSizes(newFilter).some((size) => item.sizes.includes(size))) {
          return true;
        } else return false;
      }
    );
    dispatch(sliceSneakers.actions.setData(sizeFilteredSneakers));
  };

  const getSizes = (filter: Filter) => {
    let sizes: number[] = [];
    if (filter.sizes.size35) sizes.push(35);
    if (filter.sizes.size36) sizes.push(36);
    if (filter.sizes.size37) sizes.push(37);
    if (filter.sizes.size38) sizes.push(38);
    if (filter.sizes.size39) sizes.push(39);
    if (filter.sizes.size40) sizes.push(40);
    if (filter.sizes.size41) sizes.push(41);
    if (filter.sizes.size42) sizes.push(42);
    if (filter.sizes.size43) sizes.push(43);
    return sizes;
  };

  const sliderChange = (val: number[]) => {
    setPrice({ ...prices, min: Math.round(val[0]), max: Math.round(val[1]) });
  };

  const handleMinPriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice({
      ...prices,
      min: (e.target as HTMLInputElement).valueAsNumber,
    });
  };

  const handleMaxPriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice({
      ...prices,
      max: (e.target as HTMLInputElement).valueAsNumber,
    });
  };

  const returnToDefault = () => {
    appDispatch(getSneakers());
  };

  return (
    <div className={styles.catalog_filter}>
      <h3 className={styles.catalog_title}>Подбор по&nbsp;параметрам</h3>
      <form className={styles.filter_groups} onSubmit={formFilter}>
        <div>
          <div className="slider" id="priceRange">
            <h4 className={styles.filter_group_title}>Цена, руб.</h4>
            <div className={styles.price_inputs}>
              <input
                type="number"
                name="startPrice"
                id="priceStart"
                className={styles.price_input}
                value={prices.min}
                onChange={handleMinPriceInput}
              />
              <input
                type="number"
                name="endPrice"
                id="priceEnd"
                className={styles.price_input}
                value={prices.max}
                onChange={handleMaxPriceInput}
              />
            </div>
            <Nouislider
              range={{ min: 1850, max: 25768 }}
              start={[1850, 25768]}
              connect
              onChange={sliderChange}
            />
          </div>
        </div>
        <div className={styles.filter_group_sex}>
          <h4 className={`${styles.filter_group_title} ${styles.sex_title}`}>
            Пол
          </h4>
          <div className={styles.sex}>
            <input
              type="checkbox"
              id="male"
              name="male"
              className={styles.sex_radio}
            />
            <label htmlFor="male" className={styles.sex_label}>
              мужской
            </label>
          </div>
          <div className={styles.sex}>
            <input
              type="checkbox"
              id="female"
              name="female"
              className={styles.sex_radio}
            />
            <label htmlFor="female" className={styles.sex_label}>
              женский
            </label>
          </div>
        </div>
        <div>
          <h4 className={styles.filter_group_title}>Размер</h4>
          <div className={styles.sizes}>
            <div className={styles.size}>
              <input type="checkbox" name="size35" id="35" />
              <label htmlFor="35">35</label>
            </div>
            <div className={styles.size}>
              <input type="checkbox" name="size36" id="36" />
              <label htmlFor="36">36</label>
            </div>
            <div className={styles.size}>
              <input type="checkbox" name="size37" id="37" />
              <label htmlFor="37">37</label>
            </div>
            <div className={styles.size}>
              <input type="checkbox" name="size38" id="38" />
              <label htmlFor="38">38</label>
            </div>
            <div className={styles.size}>
              <input type="checkbox" name="size39" id="39" />
              <label htmlFor="39">39</label>
            </div>
            <div className={styles.size}>
              <input type="checkbox" name="size40" id="40" />
              <label htmlFor="40">40</label>
            </div>
            <div className={styles.size}>
              <input type="checkbox" name="size41" id="41" />
              <label htmlFor="41">41</label>
            </div>
            <div className={styles.size}>
              <input type="checkbox" name="size42" id="42" />
              <label htmlFor="42">42</label>
            </div>
            <div className={styles.size}>
              <input type="checkbox" name="size43" id="43" />
              <label htmlFor="43">43</label>
            </div>
          </div>
        </div>
        <Button type="applyFilter" actionType="submit">
          Применить
        </Button>
        <Button type="resetFilter" actionType="reset" onClick={returnToDefault}>
          сбросить
        </Button>
      </form>
    </div>
  );
};

export default CatalogFilter;
