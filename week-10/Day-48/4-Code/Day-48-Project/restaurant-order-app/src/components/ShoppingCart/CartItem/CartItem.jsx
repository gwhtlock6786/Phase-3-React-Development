import "./CartItem.css";

const CartItem = ({ cartItem }) => {
  return (
    <tr className="cart-item-row">
      <td className="cart-item-name">{cartItem.name}</td>

      <td className="cart-item-price">${Number(cartItem.price).toFixed(2)}</td>

      <td className="cart-item-quantity">{cartItem.quantity}</td>

      <td className="cart-item-subtotal">
        ${(Number(cartItem.price) * Number(cartItem.quantity)).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;
