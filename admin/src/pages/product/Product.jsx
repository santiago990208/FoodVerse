import { Link, useParams } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData, productRows } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useState } from "react";


export default function Product() {
    const [data, setData] = useState(productRows);
    let {productID} = useParams();
    let dt = data.find(x => x.id == productID);
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="FoodVerse/admin/newproduct">
                    <button className="productAddButton">Nuevo</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Promedio" title="Total ventas por mes" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={dt.img} alt="" className="productInfoImg" />
                        <span className="productName">{dt.nombre}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{dt.id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Descripcion:</span>
                            <span className="productInfoValue">{dt.descripcion}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Precio:</span>
                            <span className="productInfoValue">{dt.precio}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Nombre producto</label>
                        <input type="text" placeholder={dt.nombre} />
                        <label>Descripcion</label>
                        <input type="text" placeholder={dt.descripcion} />
                        <label>Precio</label>
                        <input type="number" placeholder={dt.precio} />
                        
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={dt.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}