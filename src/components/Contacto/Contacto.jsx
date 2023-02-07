import React from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify'

export const Contacto = () => {
    const datosFormulario = React.useRef() //Creo la referencia
    let navigate = useNavigate() //Ubicacion actual de mi componente
    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current) //Consulto el estado actual del formulario
        const datForm = new FormData(datosFormulario.current) //Genero un objeto iterator de esos datos
        const contacto = Object.fromEntries(datForm) //Transforma en un objeto literal
        console.log(contacto)
        e.target.reset() //Reseteo el formulario
        toast.success("Tu consulta fue recibida! Te responderemos a la brevedad. CROSSTORE", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toasty',
            autoClose: 1500,
            theme: "dark",
        }); //setup del toast 
        navigate("/")//Redirijo a pagina inicial
    }
    return (
        <div className='backgroundcontacto'>
            <div className="container formulario">
                <h1 className='contactoTitulo'>CONTACTO</h1>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                    <div className="mb-3 datosContacto">
                        <label htmlFor="nombre" className="form-label">NOMBRE</label>
                        <input type="text" className="form-control" name="nombre" /> 
                    </div>
                    <div className="mb-3 datosContacto">
                        <label htmlFor="email" className="form-label">EMAIL</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-3 datosContacto">
                        <label htmlFor="celular" className="form-label">CELULAR</label>
                        <input type="number" className="form-control" name="celular" />
                    </div>
                    <div className="mb-3 datosContacto">
                        <label htmlFor="consulta" className="form-label">DEJANOS TU CONSULTA:</label>
                        <textarea className="form-control" name="consulta" rows={3} defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-primary botonEnviar">ENVIAR</button>
                </form>
            </div>
        </div>

    )
}



/*
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, max: 100, min: 0, maxLength: 99, pattern: /@/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, max: 12, min: 10, maxLength: 12})} />

      <input type="submit" />
    </form>
  );
}
*/