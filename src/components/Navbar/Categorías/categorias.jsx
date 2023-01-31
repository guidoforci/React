import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn-primary'>CATEGORIAS</button> 
            </a>
            <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/zapatillas"}>ZAPATILLAS</Link></li>                
            <li><Link className="dropdown-item" to={"/category/indumentaria y accesorios"}>INDUMENTARIA Y ACCESORIOS</Link></li>
            <li><Link className="dropdown-item" to={"/category/suplementos"}>SUPLEMENTOS</Link></li>
                <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to={"/category/equipatugym"}>EQUIPÁ TU GIMNASIO O BOX</Link></li>
            </ul>
        </li>
    );
}

export default Categorias;
