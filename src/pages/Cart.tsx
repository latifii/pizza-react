import { Link } from "react-router-dom";
import CartItem from "../features/cart/CartItem";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const user = useSelector((state: RootState) => state.user.username);
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
        <Button varient="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
