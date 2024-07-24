import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <CartOverview />
    </div>
  );
}
export default AppLayout;
