import { useState } from "react";
import {
  ActionFunction,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "../../store/store";
import { clearCart, getTotalPrice } from "../../store/slice/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch } from "react-redux";
import { fetchAddress } from "../../store/slice/userSlice";

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str: string) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str,
//   );

function CreateOrder() {
  const dispatch: AppDispatch = useDispatch();
  const [withPriority, setWithPriority] = useState<boolean>(false);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const {
    username: user,
    status,
    position,
    address,
  } = useSelector((state: RootState) => state.user);
  const isLoadingAddress = status === "loading";
  const totalCartPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="post">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={user}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              defaultValue={address}
              required
            />
          </div>
          <span className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
            <Button
              varient={"small"}
              type="button"
              disabled={isLoadingAddress}
              onClick={() => dispatch(fetchAddress())}
            >
              Get Location
            </Button>
          </span>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button varient={"primary"} disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order...."
              : `Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(typeof data);
  const orderAction = {
    customer: data.customer as string,
    phone: data.phone as string,
    address: data.address as string,
    cart: JSON.parse(data.cart as string),
    priority: data.priority === "on",
  };
  const newOrder = await createOrder(orderAction);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
};
export default CreateOrder;
