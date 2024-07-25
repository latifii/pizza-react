import { Cart } from "./cart.type";

export type OrderItemProps = Pick<Cart, "name" | "quantity" | "totalPrice">;
