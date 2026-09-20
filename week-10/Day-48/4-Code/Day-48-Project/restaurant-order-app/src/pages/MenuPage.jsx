import MenuItems from "../components/Menu/MenuItems/MenuItems";
import Stats from "../components/Menu/Stats/Stats";
import { menuItemData } from "../data/menu-item-data";
import { useState } from "react";
import {
  calculateSubtotal,
  calculateTotalItemsInCart,
} from "../utils/shoppingCartUtils";

import "./MenuPage.css";

const MenuPage = ({ cart, addItem }) => {
  const [menuItemList] = useState(menuItemData);

  const totalItems = calculateTotalItemsInCart(cart);
  const subtotal = calculateSubtotal(cart);

  return (
    <main className="menu-page">
      <section className="menu-page-header">
        <p className="menu-eyebrow">Fresh From the Coast</p>
        <h2>Our Seafood Menu</h2>
        <p className="menu-page-description">
          Fresh seafood favorites prepared with quality ingredients and
          coastal-inspired flavors.
        </p>
      </section>

      <Stats totalItemsInCart={totalItems} subtotal={subtotal} />

      <MenuItems menuItemList={menuItemList} addItem={addItem} />
    </main>
  );
};

export default MenuPage;
