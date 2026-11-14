import CartItem from "../CartItem/CartItem";
import "./ShoppingCartlist.css";

const ShoppingCartlist = ({
  cart,
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
    </section>
  );
};

export default ShoppingCartlist;
