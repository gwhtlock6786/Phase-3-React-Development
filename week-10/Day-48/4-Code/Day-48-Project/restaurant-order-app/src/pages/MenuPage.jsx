import MenuItems from "../components/Menu/MenuItems/MenuItems";
import { menuItemData } from "../data/menu-item-data";
import { useState } from "react";
const MenuPage = ({ addItem }) => {
  const [menuItemList] = useState(menuItemData);

  return (
    <div>
      MenuPage
      <MenuItems menuItemList={menuItemList} addItem={addItem} />
    </div>
  );
};

export default MenuPage;
