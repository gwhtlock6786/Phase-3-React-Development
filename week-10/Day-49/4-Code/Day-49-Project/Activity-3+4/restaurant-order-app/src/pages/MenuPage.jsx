import MenuItems from "../components/Menu/MenuItems/MenuItems";
import Stats from "../components/Menu/Stats/Stats";
import { menuItemData } from "../data/menu-item-data";
import "./MenuPage.css";

const MenuPage = ({
  addItem,
  calculateSubtotal,
  calculateTotalItemsInCart,
}) => {
  // The menu data is static, so we don't need useState here.
  const menuItemList = menuItemData;

  // These functions read the cart state from our custom hook.
  const totalItems = calculateTotalItemsInCart();
  const subtotal = calculateSubtotal();

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
