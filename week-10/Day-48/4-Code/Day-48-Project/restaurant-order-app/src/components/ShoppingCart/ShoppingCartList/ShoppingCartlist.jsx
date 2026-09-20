import CartItem from "../CartItem/CartItem";
import "./ShoppingCartlist.css";

const ShoppingCartlist = ({ cart, total, subtotal }) => {
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
            </tr>
          </thead>

          <tbody>
            {cart.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-summary-table-wrapper">
        <table className="cart-summary-table">
          <thead>
            <tr>
              <th>Cart Subtotal</th>
              <th>Tax</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>${subtotal.toFixed(2)}</td>
              <td>8%</td>
              <td>${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ShoppingCartlist;
