import "./CartItem.css";

const CartItem = ({
  cartItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <tr className="cart-item-row">
      <td className="cart-item-name">{cartItem.name}</td>

      <td className="cart-item-price">${Number(cartItem.price).toFixed(2)}</td>

      <td className="cart-item-quantity">
        <div className="quantity-controls">
          <button
            type="button"
            onClick={() => decrementQuantity(cartItem.id)}
            aria-label={`Decrease ${cartItem.name} quantity`}
          >
            −
          </button>

          <span>{cartItem.quantity}</span>

          <button
            type="button"
            onClick={() => incrementQuantity(cartItem.id)}
            aria-label={`Increase ${cartItem.name} quantity`}
          >
            +
          </button>
        </div>
      </td>

      <td className="cart-item-subtotal">
        ${(Number(cartItem.price) * Number(cartItem.quantity)).toFixed(2)}
      </td>

      <td className="cart-item-remove">
        <button
          type="button"
          onClick={() => removeItem(cartItem.id)}
          aria-label={`Remove ${cartItem.name} from cart`}
        >
          ×
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
