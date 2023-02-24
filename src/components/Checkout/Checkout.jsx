import { useCarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"
import React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"
import { useDarkModeContext } from '../../Context/DarkModeContext'
import { TbShoppingCartX } from "react-icons/tb";


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
                prodBDD.stock -= prodCarrito.cant // Para descontar del stock la cantidad comprada
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        if(cliente.email === cliente.repEmail) {
        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast.success(`¡Muchas gracias por comprar con nosotros!, su orden de compra con el ID: ${ordenCompra.id
                } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)
            emptyCart()
            e.target.reset()
            navigate("/")
        })} else {
            alert('Los mails no coinciden')
        }
    }

    return (
        <>
            {carrito.length === 0
                ?
                <>
                    <h2 className={`${darkMode ? 'carritoVacio' : 'carritoVacioDark'}`}>TU CARRITO ESTÁ VACÍO!<TbShoppingCartX size="50" className="tbShoppingCart"/></h2>
                    <Link className="nav-link" to={'/'}><button className={`position-absolute top-50 start-50 translate-middle ${darkMode ? 'btn btn-primary contComp' : 'btn btn-secondary contCompDark'}`}>CONTINUAR COMPRANDO</button></Link>
                </>
                :
                <div className="container" style={{ marginTop: "70px" }}>
                    <h1 className={`${darkMode ? 'tituloCheckout' : 'tituloCheckoutDark'}`}>GRACIAS POR TU COMPRA!! PARA FINALIZAR, TE SOLICITAMOS UNOS DATOS PARA COMPLETAR EL DETALLE.</h1>
                    <form onSubmit={consultarFormulario} ref={datosFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>NOMBRE Y APELLIDO</label>
                            <input required type="text" minlength="6" className="form-control" name="nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>EMAIL</label>
                            <input type="email" className="form-control" size="64" maxlength="64" required placeholder="crosstore@gmail.com" pattern=".+@gmail\.com" name="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="repEmail" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>REPETIR EMAIL</label>
                            <input required type="email" className="form-control" name="repEmail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>CELULAR</label>
                            <input required type="number" minlength="10"  maxlength="15" className="form-control" name="celular"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className={`form-label ${darkMode ? 'datosCheckout' : 'datosCheckoutDark'}`}>DIRECCIÓN DE ENVÍO</label>
                            <input required type="text" minlength="6" className="form-control" name="direccion" placeholder="Calle Falsa 123, Springfield." />
                        </div>
                        <button type="submit" className={`${darkMode ? 'btn btn-primary botonesCart' : 'btn btn-secondary botonesCartDark'}`}>FINALIZAR COMPRA</button>
                    </form>
                </div>
            }
        </>
    )
}
