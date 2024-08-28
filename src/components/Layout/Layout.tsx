import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { CartModal } from "../Modal/CartModal";

export const Layout = () => {
  return (
    <>
      <Header />
      <CartModal />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
