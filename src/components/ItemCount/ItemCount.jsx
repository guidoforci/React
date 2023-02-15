
import { useState } from "react"
import { toast } from 'react-toastify'


export const ItemCount = ({ valInicial, stock, onAdd }) => {

    const [contador, setContador] = useState(valInicial)
    //Var       //Modificar var     //Estado inicial

    const sumar = () => (contador < stock) && setContador(contador + 1) //contador = contador + 1
    const restar = () => (contador > valInicial) && setContador(contador - 1)  //Operador ternario sin else
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
            <button className="btn btn-primary botonAgregarCarrito" onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    )
}