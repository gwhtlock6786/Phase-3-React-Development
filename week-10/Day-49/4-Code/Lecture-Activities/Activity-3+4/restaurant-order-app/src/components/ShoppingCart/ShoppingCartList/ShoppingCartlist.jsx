import CartItem from "../CartItem/CartItem";
import "./ShoppingCartlist.css";

const ShoppingCartlist = ({
  cart,
  total,
  subtotal,
  tax,
  removeItem,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <section className="shopping-cart-list">
      <div className="cart-items-table-wrapper">
        <table className="cart-items-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Item Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((cartItem) => (
              <CartItem
                cartItem={cartItem}
                removeItem={removeItem}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                key={cartItem.id}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-summary-table-wrapper">
        <table className="cart-summary-table">
          <thead>
            <tr>
              <th>Cart Subtotal</th>
              <th>Tax (8%)</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>${subtotal.toFixed(2)}</td>
              <td>${tax.toFixed(2)}</td>
              <td>${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ShoppingCartlist;
