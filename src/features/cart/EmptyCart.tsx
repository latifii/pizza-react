import Button from "../../components/Button";

function EmptyCart() {
  return (
    <div className="p-4">
      <Button varient="small" to="/menu">
        &larr; Back to menu
      </Button>

      <p className="mt-4 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
