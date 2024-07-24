type CartItem = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type OrderType = {
  id: string;
  customer: string;
  phone: string;
  address: string;
  status?: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
};
