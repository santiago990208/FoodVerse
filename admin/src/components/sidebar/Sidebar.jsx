import "./sidebar.css"
import { Link } from "react-router-dom";
import {
    Fastfood,
    LineStyle,
    PeopleOutline,

}
    from "@material-ui/icons";
import { DiscountOutlined, MopedOutlined, ProductionQuantityLimitsOutlined } from "@mui/icons-material";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Administración</h3>
                    <ul className="sidebarList">
                        <Link to="FoodVerse/admin/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to="FoodVerse/admin/users" className="link">
                            <li className="sidebarListItem">
                                <PeopleOutline className="sidebarIcon" />
                                Clientes
                            </li>
                        </Link>
                        <Link to="FoodVerse/admin/products" className="link">
                            <li className="sidebarListItem">
                                <ProductionQuantityLimitsOutlined className="sidebarIcon" />
                                Productos
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Usuarios</h3>
                    <ul className="sidebarList">
                        <Link to="FoodVerse/admin/coupons" className="link">
                            <li className="sidebarListItem">
                                <DiscountOutlined className="sidebarIcon" />
                                Cupones
                            </li>
                        </Link>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Órdenes</h3>
                    <ul className="sidebarList">
                        <Link to="FoodVerse/admin/ordenes" className="link">
                            <li className="sidebarListItem">
                                <Fastfood className="sidebarIcon" />
                                Órdenes
                            </li>
                        </Link>

                    </ul>
                </div>

            </div>
        </div>
    );
}
