
import { useState } from "react"
import { toast } from 'react-toastify'
import { TbShoppingCartPlus } from "react-icons/tb";

export const ItemCount = ({ valInicial, stock, onAdd }) => {

    const [contador, setContador] = useState(valInicial)
    const sumar = () => (contador < stock) && setContador(contador + 1) 
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () => {
        onAdd(contador)
        toast(`Agregaste ${contador} productos al carrito!`, {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toasty',
            autoClose: 1500,
            theme: "dark",
        })
    }
    return (
        <>
            <button className="btn btn-primary botonMas" onClick={() => sumar()}>+</button>
            {contador}
            <button className="btn btn-primary botonMenos" onClick={() => restar()}>-</button>
            <button className="btn btn-primary botonAgregarCarrito" onClick={() => agregarCarrito()}>Agregar al carrito <TbShoppingCartPlus size="18" /></button>
        </>
    )
}
