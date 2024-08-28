import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CatalogP from "./pages/Catalog";

const router = createBrowserRouter([
  {
    path: "sneakermax",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "catalog/:id",
        element: <CatalogP />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
