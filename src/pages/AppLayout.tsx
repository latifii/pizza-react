import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import CartOverview from "../features/cart/CartOverview";
import Loading from "../components/Loading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {isLoading && <Loading />}
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
export default AppLayout;
