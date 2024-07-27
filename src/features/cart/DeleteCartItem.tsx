import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { AppDispatch } from "../../store/store";
import { deleteItem } from "../../store/slice/cartSlice";
type DeleteCartProps = {
  id: number;
};
const DeleteCartItem: React.FC<DeleteCartProps> = ({ id }) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <Button varient="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
};

export default DeleteCartItem;
