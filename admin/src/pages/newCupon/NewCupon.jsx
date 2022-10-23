import "./newCupon.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Añadir cupon</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Nombre cupon</label>
          <input type="text" placeholder="Cupon" />
        </div>
        <div className="addProductItem">
          <label>Descripción</label>
          <input type="text" placeholder="Descripcion" />
        </div>
        <div className="addProductItem">
          <label>Valor</label>
          <input type="number" placeholder="Valor" />
        </div>
        <div className="addProductItem">
          <label>Codigo</label>
          <input type="text" placeholder="Codigo" />
        </div>
        
        <button className="addProductButton">Crear</button>
      </form>
    </div>
  );
}