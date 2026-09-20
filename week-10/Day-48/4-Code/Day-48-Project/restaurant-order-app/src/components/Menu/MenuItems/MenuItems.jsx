import MenuItemCard from "../MenuItemCard/MenuItemCard";
import "./MenuItems.css";

const MenuItems = ({ menuItemList, addItem }) => {
  return (
    <section className="menu-items">
      <div className="menu-items-header">
        <h2>Featured Seafood</h2>
        <p>Explore our selection of fresh seafood dishes, prepared to order.</p>
      </div>

      <div className="menu-items-grid">
        {menuItemList.map((menuItem) => (
          <MenuItemCard
            key={menuItem.id}
            menuItem={menuItem}
            addItem={addItem}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
