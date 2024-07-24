import { Cart } from "./cart.type";

export interface OrderResponse {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: Cart[];
  createdAt: string;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
  status: string;
}
