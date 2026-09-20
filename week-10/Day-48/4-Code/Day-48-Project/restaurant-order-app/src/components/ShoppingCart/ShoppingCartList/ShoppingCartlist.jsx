import CartItem from "../CartItem/CartItem";
const ShoppingCartlist = ({ cart, total, subtotal }) => {
  return (
    <section>
      <table>
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
      <table>
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
    </section>
  );
};

export default ShoppingCartlist;
