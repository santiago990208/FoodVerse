import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Añadir producto</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Imagen</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nombre producto</label>
          <input type="text" placeholder="Producto" />
        </div>
        <div className="addProductItem">
          <label>Descripción</label>
          <input type="text" placeholder="Descripcion" />
        </div>
        <div className="addProductItem">
          <label>Precio</label>
          <input type="number" placeholder="Precio" />
        </div>
        
        <button className="addProductButton">Crear</button>
      </form>
    </div>
  );
}