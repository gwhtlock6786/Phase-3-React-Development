import MenuItemCard from "../MenuItemCard/MenuItemCard";

const MenuItems = ({ menuItemList, addItem }) => {
  return (
    <div>
      {menuItemList.map((menuItem) => (
        <MenuItemCard key={menuItem.id} menuItem={menuItem} addItem={addItem} />
      ))}
    </div>
  );
};

export default MenuItems;
