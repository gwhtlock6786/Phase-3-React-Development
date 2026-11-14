import "./MenuItemCard.css";

const MenuItemCard = ({ menuItem, addItem }) => {
  const onAddToCart = () => {
    addItem(menuItem);
  };

  return (
    <article className="menu-item-card">
      <div className="menu-item-card-content">
        <div className="menu-item-card-top">
          <span className="menu-item-category">{menuItem.category}</span>

          <span className="menu-item-price">
            ${Number(menuItem.price).toFixed(2)}
          </span>
        </div>

        <h3>{menuItem.name}</h3>

        <p className="menu-item-description">{menuItem.description}</p>

        <button className="menu-item-button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default MenuItemCard;
