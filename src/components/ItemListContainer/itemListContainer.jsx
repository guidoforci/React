import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

// componentes
import { ItemList } from '../ItemList/ItemList'

//Context
import { useDarkModeContext } from '../../Context/DarkModeContext'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()
    const {darkMode} = useDarkModeContext()
    console.log(darkMode)

    useEffect(() => {
        if(idCategoria) {
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === idCategoria)
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
                console.log(productsList)
                setProductos(productsList)
            })
        } else {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                console.log(products)
                const productsList = <ItemList products={products} plantilla={'item'}/>   //Array de productos en JSX
                console.log(productsList)
                setProductos(productsList)
            })
        }
        
    }, [idCategoria]) /* va [] cuando se renderiza y va [prop] cuando se renderiza y actualiza.*/


    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}


