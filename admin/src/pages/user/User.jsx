import {
    EmailOutlined,
    LocationCityOutlined,
    Phone,
    Publish,
  } from "@material-ui/icons";
  import { Link, useParams } from "react-router-dom";
  import "./user.css";
  import { userRows } from "../../dummyData";
  import { useState } from "react";

  
  export default function User() {
    const [data, setData] = useState(userRows);
    let {userID} = useParams();
    let dt = data.find(x => x.id == userID);
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Cliente</h1>
          <Link to="FoodVerse/admin/newUser">
            <button className="userAddButton">Crear</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={dt.avatar}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{dt.nombre} {dt.apellido}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Detalles</span>
              <div className="userShowInfo">
                <LocationCityOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">{dt.ubicacion}</span>
              </div>
              <div className="userShowInfo">
                <EmailOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">{dt.correo}</span>
              </div>
              <div className="userShowInfo">
                <Phone className="userShowIcon" />
                <span className="userShowInfoTitle">{dt.telefono}</span>
              </div>
              
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Editar</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Nombre</label>
                  <input
                    type="text"
                    placeholder={dt.nombre}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Apellido</label>
                  <input
                    type="text"
                    placeholder={dt.apellido}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Ubicacion</label>
                  <input
                    type="text"
                    placeholder={dt.ubicacion}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Correo</label>
                  <input
                    type="email"
                    placeholder={dt.correo}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Telefono</label>
                  <input
                    type="number"
                    placeholder={dt.telefono}
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={dt.avatar}
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }