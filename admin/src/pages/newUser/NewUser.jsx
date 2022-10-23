import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nuevo usuario</h1>
      <form className="newUserForm">
      <div className="newUserItem">
          <label>Imagen</label>
          <input type="file" id="file" />
        </div>
        <div className="newUserItem">
          <label>Nombre</label>
          <input type="text" placeholder="nombre" />
        </div>
        <div className="newUserItem">
          <label>Apellido</label>
          <input type="text" placeholder="Apellido" />
        </div>
        <div className="newUserItem">
          <label>Ubicacion</label>
          <input type="email" placeholder="Ubicacion" />
        </div>
        <div className="newUserItem">
          <label>Correo</label>
          <input type="email" placeholder="Correo" />
        </div>
        <div className="newUserItem">
          <label>Telefono</label>
          <input type="number" placeholder="0000" />
        </div>
        
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}