import "./cuponList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { cuponRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(cuponRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nombre",
      headerName: "nombre",
      width: 200,
    },
    { field: "descripcion", headerName: "Descripcion", width: 200 },
    {
      field: "valor",
      headerName: "valor",
      width: 120,
    },
    {
      field: "codigo",
      headerName: "codigo",
      width: 120,
    },
    {
      field: "action",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/cupon/" + params.row.id}>
              <button className="productListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
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