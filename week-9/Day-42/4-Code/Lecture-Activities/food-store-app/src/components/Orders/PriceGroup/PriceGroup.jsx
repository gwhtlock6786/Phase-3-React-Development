import Order from "../Order/Order";
import { PRICE_RANGES } from "../../../utils/constants";
import "./PriceGroup.css";

const PriceGroup = ({ groupedOrders }) => {
  const priceGroups = [
    PRICE_RANGES.HIGH,
    PRICE_RANGES.MEDIUM,
    PRICE_RANGES.LOW
  ];

  return (
    <>
      {priceGroups.map((priceRange) => (
        <section key={priceRange} className="price-group">
          <h3>{priceRange}</h3>

          <div className="orders-grid">
            {(groupedOrders[priceRange] || []).map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default PriceGroup;