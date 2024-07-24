import { Cart } from "./cart.type";

export interface Order {
  id: string;
  customer: string;
  status: string;
  priority: boolean;
  cart: Cart[];
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
}
