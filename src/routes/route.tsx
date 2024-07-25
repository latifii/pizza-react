import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import MenuPage, { loader as menuLoader } from "../pages/MenuPage.tsx";
import CreateOrder, {
  action as actionCreateOrder,
} from "../features/order/CreateOrder.tsx";
import Order, { loader as orderLoader } from "../features/order/Order.tsx";
import AppLayout from "../pages/AppLayout.tsx";
import Error from "../pages/Error.tsx";
import Cart from "../pages/Cart.tsx";
const route = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionCreateOrder,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);

export default route;
