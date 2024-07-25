import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function UserName() {
  const user = useSelector((state: RootState) => state.user.username);
  if (!user) return null;
  return <div className="hidden text-sm font-semibold md:block">{user}</div>;
}
export default UserName;
