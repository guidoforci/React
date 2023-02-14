import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <Link className="nav-link" to={'/cart'}><button className="btn btn-primary"><FaShoppingCart size="23"/></button></Link>
            <p>{cantidadCarrito}</p>
        </>
    );
}

export default CartWidget;





