
import CartWidget from '../CartWidget/CartWidget';
import Secciones from "./Secciones/Secciones";
import Categorias from './Categorías/categorias';
import RedesSociales from './RedesSociales/RedesSociales';
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode";




const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <p className="navbar-brand" href="#">CROSSTORE</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Secciones/>
                        <Categorias/>
                    </ul> 
                    <div>
                        <RedesSociales/>
                    </div>
                        <CartWidget cantidadCarrito={18}/>
                        <BotonDarkMode/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


/*const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Secciones/>
                    <Categorias/>
                </ul>
                <CartWidget cantCarrito={5}/>
                <BotonDarkMode/>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;*/