import ShoppingCartlist from "../components/ShoppingCart/ShoppingCartList/ShoppingCartlist";
import { calculateSubtotal, calculateTotal } from "../utils/shoppingCartUtils";
const ShoppingCartPage = ({ cart }) => {
  const subtotal = calculateSubtotal(cart);
  const total = calculateTotal(subtotal);

  return (
    <div>
      <ShoppingCartlist cart={cart} total={total} subtotal={subtotal} />
    </div>
  );
};

export default ShoppingCartPage;
