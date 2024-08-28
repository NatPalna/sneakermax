import styles from "./styles.module.css";
import logo from "../../assets/img/logo.svg";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer_container}`}>
        <Link to="/sneakermax">
          <img src={logo} alt="SneakMax" />
        </Link>
        <Nav />
      </div>
    </footer>
  );
};

export default Footer;
