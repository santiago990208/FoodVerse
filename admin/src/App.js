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
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userID" element =  {<User/>} />
          <Route path="/newUser" element =  {<NewUser/>} />
          <Route path = "/ordenes" element = {<OrderList />} />
          <Route path = "/orden/:ordenID" element = {<Orden />} />
          <Route path = "/products" element = {<ProductList/>} />
          <Route path="/product/:productID" element =  {<Product/>} />
          <Route path = "/newProduct" element = {<NewProduct />} />
          <Route path = "/coupons" element = {<CuponList />} />
          <Route path = "/cupon/:cuponID" element = {<Cupon/>} />
          <Route path = "/newCupon" element = {<NewCupon/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
