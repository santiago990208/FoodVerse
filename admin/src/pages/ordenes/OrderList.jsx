import "./orderList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { orderRow } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(orderRow);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "Número de orden", width: 200 },
    {
      field: "cliente",
      headerName: "Cliente",
      width: 200
    },
    { field: "cupon", headerName: "Cupon", width: 200 },
    {
      field: "Total_orden",
      headerName: "Total orden",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"FoodVerse/admin/orden/" + params.row.id}>
              <button className="productListEdit">Ver mas</button>
            </Link>
            
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}