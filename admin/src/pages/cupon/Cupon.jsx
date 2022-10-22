import { Link, useParams } from "react-router-dom";
import "./cupon.css";
import { productData, cuponRows } from "../../dummyData"
import { useState } from "react";


export default function Product() {
    const [data, setData] = useState(cuponRows);
    let {cuponID} = useParams();
    let dt = data.find(x => x.id == cuponID);
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Cupon</h1>
                <Link to="/newCupon">
                    <button className="productAddButton">Nuevo</button>
                </Link>
            </div>
            <div className="productTop">
                
                <div className="productTopRight">
                    <div className="productInfoTop">
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
                            <span className="productInfoKey">Valor:</span>
                            <span className="productInfoValue">{dt.valor}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Codigo:</span>
                            <span className="productInfoValue">{dt.codigo}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Nombre cupon</label>
                        <input type="text" placeholder={dt.nombre} />
                        <label>Descripcion</label>
                        <input type="text" placeholder={dt.descripcion} />
                        <label>Valor</label>
                        <input type="number" placeholder={dt.valor} />
                        <label>Codigo</label>
                        <input type="number" placeholder={dt.codigo} />
                        
                    </div>
                    
                </form>
            </div>
        </div>
    );
}