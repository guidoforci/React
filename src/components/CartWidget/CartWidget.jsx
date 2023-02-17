import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CarritoContext"; 

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className="nav-link" to={'/cart'}><button className="btn btn-primary"><FaShoppingCart size="23"/></button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link>
        </>
    );
}

export default CartWidget;





/*<>
            <Link className="nav-link" to={'/cart'}>
                <button className="btn btn-dark">Carrito</button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link> 
        </>*/