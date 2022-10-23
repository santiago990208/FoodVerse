import { useParams } from "react-router-dom";
import "./orden.css";
import { orderRow, orderProductRow } from "../../dummyData"
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";


export default function Product() {
    const [data, setData] = useState(orderRow);
    const [dataProduct, setDataProduct] = useState(orderProductRow);
    let { ordenID } = useParams();
    let dt = data.find(x => x.id == ordenID);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "nombre",
            headerName: "nombre",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.nombre}
                    </div>
                );
            },
        },
        { field: "cantidad", headerName: "Cantidad", width: 200 },
        {
            field: "total_producto",
            headerName: "Total Producto",
            width: 200,
        },
    ];

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Orden {dt.id}</h1>
            </div>
            <div className="productTop">

                <div className="productTopRight">
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{dt.id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Cliente: </span>
                            <span className="productInfoValue"> {dt.cliente}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Cupon:</span>
                            <span className="productInfoValue">{dt.cupon}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Total orden:</span>
                            <span className="productInfoValue">{dt.Total_orden}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Status:</span>
                            <span className="productInfoValue">{dt.status}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productTitleContainer">
                <h1 className="productTitle">Productos de orden {dt.id}</h1>
            </div>
            <div className="productBottom">
                <div className="productOrdenList" style={{ height: 350, width: '100%' }}>
                    <DataGrid
                        rows={dataProduct}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={8}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}