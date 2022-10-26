import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import OrderList from "./pages/ordenes/OrderList";
import Orden from "./pages/orden/Orden";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductList from "./pages/productos/ProductList";
import CuponList from "./pages/cuponList/CuponList";
import Cupon from "./pages/cupon/Cupon";
import NewCupon from "./pages/newCupon/NewCupon";
function App() {
  return (
    <Router>|
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="FoodVerse/admin/" element={<Home />} />
          <Route path="FoodVerse/admin/users" element={<UserList />} />
          <Route path="FoodVerse/admin/user/:userID" element =  {<User/>} />
          <Route path="FoodVerse/admin/newUser" element =  {<NewUser/>} />
          <Route path = "FoodVerse/admin/ordenes" element = {<OrderList />} />
          <Route path = "FoodVerse/admin/orden/:ordenID" element = {<Orden />} />
          <Route path = "FoodVerse/admin/products" element = {<ProductList/>} />
          <Route path="FoodVerse/admin/product/:productID" element =  {<Product/>} />
          <Route path = "FoodVerse/admin/newProduct" element = {<NewProduct />} />
          <Route path = "FoodVerse/admin/coupons" element = {<CuponList />} />
          <Route path = "FoodVerse/admin/cupon/:cuponID" element = {<Cupon/>} />
          <Route path = "FoodVerse/admin/newCupon" element = {<NewCupon/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
