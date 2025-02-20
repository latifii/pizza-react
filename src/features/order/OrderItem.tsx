import { OrderItemProps } from "../../types/orderItem.type";
import { formatCurrency } from "../../utils/helpers";
const OrderItem: React.FC<OrderItemProps> = ({
  quantity,
  name,
  totalPrice,
}) => {
  // function OrderItem({ item, isLoadingIngredients, ingredients }) {
  // const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default OrderItem;
