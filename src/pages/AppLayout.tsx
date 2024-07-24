import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import CartOverview from "../features/cart/CartOverview";
import Loading from "../components/Loading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      <Header />
      {isLoading && <Loading />}
      <div>
        <Outlet />
      </div>
      <CartOverview />
    </div>
  );
}
export default AppLayout;
