import "./MenuItemList.css";
import MenuItemCard from "../MenuItemCard/MenuItemCard";

const MenuItemList = ({ menuItems }) => {
  return (
    <section className="menu-item-list">
        <h2>Menu Items</h2>
        <hr />

        <div className="menu-item-grid">
            {menuItems.map(menuItem => (
                <MenuItemCard key={menuItem.id} menuItem={menuItem} />
            ))}
          
        </div>

    </section>

  )
}

export default MenuItemList