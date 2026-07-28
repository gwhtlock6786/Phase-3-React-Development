import { groupByCost } from "../../../utils/groupByCost";
import PriceGroup from "../PriceGroup/PriceGroup";
import  "./OrderDisplay.css"

const OrderDisplay = ({orderData}) => {


const groupedOrders = groupByCost(orderData);

  return (
    <section className="order-display">
        <h2>Products to Order</h2>
        <PriceGroup groupedOrders={groupedOrders} />
    </section>
  )
}

export default OrderDisplay