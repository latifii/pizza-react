import { Link } from "react-router-dom";
import CartItem from "../features/cart/CartItem";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import EmptyCart from "../features/cart/EmptyCart";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/slice/cartSlice";

function Cart() {
  const { cart } = useSelector((state: RootState) => state.cart);
  const user = useSelector((state: RootState) => state.user.username);
  const dispatch: AppDispatch = useDispatch();
  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <Link to="/menu">&larr; Back to menu</Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {user}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => {
          return <CartItem key={item.pizzaId} {...item} />;
        })}
      </ul>
      <div className="mt-6 space-x-2">
        <Button varient="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button varient="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
