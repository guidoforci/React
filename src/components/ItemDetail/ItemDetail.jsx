import { ItemCount } from '../ItemCount/ItemCount'


//CONTEXT 
import { useDarkModeContext } from '../../Context/DarkModeContext'


export const ItemDetail = ({ item }) => {
    const {darkMode} = useDarkModeContext()
    const onAdd = (cantidad) => { //Agregar el producto al carrito
        console.log(cantidad)
        console.log(item)
    }

    return (
        
        <div className='row g-0 detalle'>
            <div className= "col-md-4">
            <img src={`../img/${item.img}`} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="col-md-8">
                <div className={`card-body ${darkMode ? 'itemDetail' : 'itemDetailBodyDark'}`}>
                    <h5 className='card-title'>{item.nombre} {item.modelo}</h5>
                    <p className='card-text'>Marca: {item.marca}</p>
                    <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>Stock: {item.stock}</p>
                    <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                </div>
                <button className='btn btn-primary finalizarcompra'>Finalizar Compra</button>
            </div>
        </div>
    )
}

/*import {ItemCount} from '../ItemCount/ItemCount'
//Context
import { useDarkModeContext } from '../../context/DarkModeContext'
export const ItemDetail = ({item}) => {
  const {darkMode} = useDarkModeContext()
  const onAdd = (cantidad) => { //Agregar el producto al carrito
    console.log(cantidad)
    console.log(item)
  }

  return (
    <div className='row g-0'>
        <div className="col-md-4">
            <img src={`../img/${item.img}`} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
        </div>
        <div className="col-md-8">
            <div className='card-body' >
                <h5 className='card-title'>{item.nombre} {item.modelo}</h5>
                <p className='card-text'>Marca: {item.marca}</p>
                <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className='card-text'>Stock: {item.stock}</p>
                <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                <button className='btn btn-secondary'>Finalizar Compra</button>
            </div>
        </div>
     
    </div>
  )
}
*/