import MenuItems from "../components/Menu/MenuItems/MenuItems";
import Stats from "../components/Menu/Stats/Stats";
import { menuItemData } from "../data/menu-item-data";

import {
  calculateSubtotal,
  calculateTotalItemsInCart,
} from "../utils/shoppingCartUtils";
const MenuPage = ({ cart, addItem }) => {
  const totalItems = calculateTotalItemsInCart(cart);
  const subtotal = calculateSubtotal(cart);

  return (
    <div>
      MenuPage
      <Stats totalItemsInCart={totalItems} subtotal={subtotal} />
      <MenuItems menuItemList={menuItemData} addItem={addItem} />
    </div>
  );
};

export default MenuPage;
