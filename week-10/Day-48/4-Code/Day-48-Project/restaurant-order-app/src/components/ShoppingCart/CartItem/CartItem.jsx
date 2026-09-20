const CartItem = ({ cartItem }) => {
  return (
    <tr>
      <td>{cartItem.name}</td>
      <td>${cartItem.price}</td>
      <td>{cartItem.quantity}</td>
      <td>
        ${(Number(cartItem.price) * Number(cartItem.quantity)).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;
