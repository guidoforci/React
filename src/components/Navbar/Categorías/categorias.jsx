import React from 'react';

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn-primary'>CATEGORIAS</button> 
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">INDUMENTARIA</a></li>
                <li><a className="dropdown-item" href="#">ACCESORIOS</a></li>
                <li><a className="dropdown-item" href="#">INFO/AYUDA</a></li>
                <li><a className="dropdown-item" href="#">EQUIPÁ TU GIMNASIO</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Contacto</a></li>
            </ul>
        </li>
    );
}

export default Categorias;
