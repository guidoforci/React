import { useCarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"
import React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"
import { useDarkModeContext } from '../../Context/DarkModeContext'



export const Checkout = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    const {darkMode} = useDarkModeContext();
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant // Descuento del stock la cantidad comprada
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast.success(`¡Muchas gracias por comprar con nosotros!, su orden de compra con el ID: ${ordenCompra.id
                } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)
            emptyCart()
            e.target.reset()
            navigate("/")
        })

    }


    return (
        <>
            {carrito.length === 0
                ?
                <>
                    <h2>TU CARRITO ESTÁ VACÍO!</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">CONTINUAR COMPRANDO</button></Link>
                </>
                :
                <div className="container" style={{ marginTop: "70px" }}>
                    <form onSubmit={consultarFormulario} ref={datosFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>NOMBRE Y APELLIDO</label>
                            <input type="text" className="form-control" name="nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>EMAIL</label>
                            <input type="email" className="form-control" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="repEmail" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>REPETIR EMAIL</label>
                            <input type="email" className="form-control" name="repEmail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>CELULAR</label>
                            <input type="number" className="form-control" name="celular" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>DIRECCIÓN DE ENVÍO</label>
                            <input type="text" className="form-control" name="direccion" />
                        </div>

                        <button type="submit" className={`${darkMode ? 'btn btn-primary botonesCart' : 'btn btn-secondary botonesCartDark'}`}>FINALIZAR COMPRA</button>
                    </form>
                </div>
            }
        </>
    )
}