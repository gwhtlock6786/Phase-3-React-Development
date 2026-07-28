import './App.css'
import OrderDisplay from './components/Orders/OrderDisplay/OrderDisplay'
import ShiftDisplay from './components/Shifts/ShiftDisplay/ShiftDisplay'
import EmployeeList from './components/Employees/EmployeeList/EmployeeList'
import MenuItemList from './components/MenuItems/MenuItemList/MenuItemList'
import ProductList from './components/Products/ProductList/ProductList'
import Header from './components/Header/Header'
import { employees } from './data/employee-data'
import { menuItems } from './data/menu-item-data'
import { productData } from './data/product-data'
import { shiftData } from './data/shift-data'
import { orderData } from './data/order-item-data'


function App() {
 

  return (
    <>
      <Header />
      <EmployeeList employees={employees}/>
      <MenuItemList menuItems={menuItems} />
      <ProductList products={productData} />
      <ShiftDisplay shifts={shiftData} />
      <OrderDisplay orderData={orderData} />
    </>
  )
}

export default App
