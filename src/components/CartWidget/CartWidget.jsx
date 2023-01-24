import { FaShoppingCart } from "react-icons/fa";


const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <button className="btn btn-primary"><FaShoppingCart size="23"/></button>
            <p>{cantidadCarrito}</p>
        </>
    );
}

export default CartWidget;
