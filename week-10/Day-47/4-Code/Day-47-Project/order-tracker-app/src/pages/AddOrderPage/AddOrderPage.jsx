import OrderForm from "../../components/OrderForm/OrderForm";

const AddOrderPage = ({ setOrders }) => {
  return (
    <div>
      <OrderForm setOrders={setOrders} />
    </div>
  );
};

export default AddOrderPage;
