import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { RootState } from "../store/store";
import Button from "../components/Button";

function HomePage() {
  const user = useSelector((state: RootState) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!user ? (
        <CreateUser />
      ) : (
        <Button varient={"primary"} to={"/menu"}>
          Continue ordering, {user}
        </Button>
      )}
    </div>
  );
}

export default HomePage;
