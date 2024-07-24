import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import { Menu } from "../types/menu.interface";
import MenuItem from "../features/menu/MenuItem";

function MenuPage() {
  const menu = useLoaderData() as Menu[];

  return (
    <div>
      {menu.map((item: Menu) => {
        return <MenuItem key={item.id} pizza={item} />;
      })}
    </div>
  );
}

export const loader: LoaderFunction = async () => {
  const menu = await getMenu();

  return menu;
};
export default MenuPage;
