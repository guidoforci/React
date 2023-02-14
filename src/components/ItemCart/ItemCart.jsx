import { BsTrash } from "react-icons/bs";


export const ItemCart = ({ item }) => {
    return (
        <div className="card mb-3 cardCart">
            <div className="row g-0 cardFlex">
                <div className="col-md-4">
                    <img src={item.img} alt={`Imagen de producto ${item.nombre}`} className="img-fluid rounded-start imagenCart" />
                </div>
                <div className="col-md-8 descripcionCard">
                    <div className="card-body cuerpoCard">
                        <h5 className="card-title tituloCard">{item.nombre} {item.modelo}</h5>
                        <p className="card-text detalleCard">CANTIDAD: {item.cantidad}</p>
                        <p className="card-text detalleCard">PRECIO UNITARIO: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text detalleCard">SUBTOTAL: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cantidad)}</p>
                        <button className="btn btn-primary eliminarProducto" onClick={() => "Borrar producto"}><BsTrash size="23" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
