import MenuItemCard from "../MenuItemCard/MenuItemCard";

const MenuItems = ({ menuItemList, addItem }) => {
  return (
    <div>
      {menuItemList.map((menuItem, index) => (
        <MenuItemCard key={index} menuItem={menuItem} addItem={addItem} />
      ))}
    </div>
  );
};

export default MenuItems;
