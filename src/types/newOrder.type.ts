export type NewOrder = {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: {
    pizzaId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
};
