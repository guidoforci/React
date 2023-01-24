import { useState } from "react"

export const ItemCount = ({ValorInicial, Stock}) => {

    const [contador, setContador] = useState(ValorInicial);
           //Var    //Modificar var  //Estado inicial

    const sumar = () => (contador < Stock) && setContador(contador + 1) //contador = contador + 1
    const restar = () => (contador > ValorInicial ) && setContador(contador - 1) //contador = contador - 1


    return (
        <>
            <button className="btn btn-primary" onClick={() => sumar()}>+</button>
            {contador}
            <button className="btn btn-primary" onClick={() => restar()}>-</button>
        </>
    )
}