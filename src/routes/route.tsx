import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import MenuPage, { loader as menuLoader } from "../pages/MenuPage.tsx";
import CartPage from "../pages/CartPage.tsx";
import CreateOrder from "../features/order/CreateOrder.tsx";
import Order from "../features/order/Order.tsx";
import AppLayout from "../pages/AppLayout.tsx";
const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

export default route;
