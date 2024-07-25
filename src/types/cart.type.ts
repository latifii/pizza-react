export type Cart = {
  addIngredients?: string[];
  removeIngredients?: string[];
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type CartProps = Omit<
  Cart,
  "addIngredients" | "removeIngredients" | "unitPrice"
>;
