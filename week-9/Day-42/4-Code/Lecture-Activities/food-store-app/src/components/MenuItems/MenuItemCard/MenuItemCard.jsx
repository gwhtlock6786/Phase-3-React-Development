import "./MenuItemCard.css";

const MenuItemCard = ({menuItem}) => {

const { name, description, price, dietaryInfo } = menuItem;


  return (
    <div className="menu-item-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <p>{dietaryInfo}</p>
    </div>
  )
}

export default MenuItemCard