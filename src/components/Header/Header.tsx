import styles from "./styles.module.css";
import logo from "../../assets/img/logo.svg";
import cart from "../../assets/img/Cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { sliceCart } from "../../Redux/slices/sliceCart";
import { Link } from "react-router-dom";
import { useIsMobile } from "../../hooks/useMobile";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";

const Header = () => {
  const isMobile = useIsMobile();

  const items = useSelector((state: RootState) => state.cart.itemsInCart);

  const dispatch = useDispatch();

  return (
    <header className={`violet_section ${styles.header}`}>
      <div className={`container ${styles.header_container}`}>
        <Link to="/sneakermax">
          <img src={logo} alt="SneakMax" />
        </Link>
        <div className={styles.header_inner}>
          {isMobile ? <MobileMenu /> : <DesktopMenu />}
          <div
            className={styles.header_cart_wrapper}
            onClick={() => {
              dispatch(sliceCart.actions.openModal());
            }}
          >
            Корзина
            <div className={styles.cart}>
              <img src={cart} alt="Корзина" className={styles.cart_img} />
              <span className={styles.cart_count}>{items.length}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
