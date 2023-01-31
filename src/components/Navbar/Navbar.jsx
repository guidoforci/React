
import CartWidget from '../CartWidget/CartWidget';
import SeccionHome from "./Secciones/SeccionHome";
import Categorias from './Categorías/categorias';
import SeccionContacto from "./Secciones/SeccionContacto";
import RedesSociales from './RedesSociales/RedesSociales';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CROSSTORE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <SeccionHome/>
                        <Categorias/>
                        <SeccionContacto/>
                    </ul> 
                    <div>
                        <RedesSociales/>
                    </div>
                        <CartWidget cantidadCarrito={18}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
