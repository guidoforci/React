import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"



export const Cart = () => {
    const carrito = [
        {id: 1, nombre: "Arroz", modelo: "1", img: "reebok-zapatillas-nano-x2.jpg", precio: 400, cantidad: 5 },
        {id: 2,nombre: "Fideos", modelo: "2", img: "reebok-zapatillas-nano-x2.jpg",precio: 300, cantidad: 2 },
        {id: 3,nombre: "Manteca", modelo: "3",img: "reebok-zapatillas-nano-x2.jpg",precio: 500, cantidad: 3 },
    ]
    return(
        <>
            { carrito.length === 0 
              ? //Si carrito esta vacio
                <>
                    <h2>Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
                </>
              : //Si carrito tiene productos
                <div className="container cartContainer">
                    {
                        <ItemList products={carrito} plantilla={'itemCart'}/>
                    }
                    <div>
                        <p>Resumen de la compra: precio total</p>
                        <button className="btn btn-dark botonesCart">Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark botonesCart">Continuar Comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark botonesCart">Finalizar compra</button></Link> 
                    </div>
                </div>
            }
        </>
    )
}




/*TECNICAS DE RENDERING 

1) 
    Condicional 1 = 6 complejidad, 2 return y 1 condicional
    if(false) {
        return <p>Es verdadero</p>;
    } 
    return <p>Es falso</p>;
    -----------------

2)
    Condicional 2 = 6 complejidad, 1 return y 2 condicionales
    const condLogica = false
    return(
        <>
        {condLogica && <p>Es verdadero</p>  }
        {!condLogica && <p>Es falso</p>  }
        </>
    )


    ------------

3) FORMA MÁS ÓPTIMA: 

    Condicional 3 = 5 complejidad, 1 return y 1 condicional
    const condLogica = false
    return(
        <>
            {condLogica ? <p>Es verdadero</p> : <p>Es falso</p>}
        </>
    )
*/
