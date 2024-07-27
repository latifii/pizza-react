import { useSelector } from "react-redux";
import { CartProps } from "../../types/cart.type";
import { formatCurrency } from "../../utils/helpers";
import DeleteCartItem from "./DeleteCartItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "../../store/slice/cartSlice";

const CartItem: React.FC<CartProps> = ({
  pizzaId,
  name,
  quantity,
  totalPrice,
}: CartProps) => {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <DeleteCartItem id={pizzaId} />
        <UpdateItemQuantity id={pizzaId} currentQuantity={currentQuantity} />
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default CartItem;
