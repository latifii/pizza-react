import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { AppDispatch } from "../../store/store";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../store/slice/cartSlice";

type UpdateItemProps = {
  id: number;
  currentQuantity?: number;
};
const UpdateItemQuantity: React.FC<UpdateItemProps> = ({
  id,
  currentQuantity,
}: UpdateItemProps) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        varient="rounded"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        varient="rounded"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
