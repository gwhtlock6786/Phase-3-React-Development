const MenuItem = ({ menuItem, addItem }) => {
  const onAddToCart = () => {
    addItem(menuItem);
  };
  return (
    <div>
      <h3>{menuItem.name}</h3>
      <p>${menuItem.price}</p>
      <p>{menuItem.description}</p>

      <button oncLick={onAddToCart}>Add item</button>
    </div>
  );
};

export default MenuItem;
