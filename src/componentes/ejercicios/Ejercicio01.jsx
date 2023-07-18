/* react core */
import React, { useState, useEffect } from 'react'

const Ejercicio01 = () => {
    const [valorNeto, setValorNeto] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)

    const handValorNeto = (evento) => {
        setValorNeto(evento.target.value)
        console.log(evento.target.value)

    }

    const handleCalcular = (evento) =>{
        console.log("presionado botón calcular")
    }

    return (
        <> 
            <h1>Ingresar Valor Neto </h1>
            <label htmlFor="neto">Valor Neto</label>
            <input 
            type="number"
            name="neto"
            id="neto"
            value={valorNeto}
            onChange={handValorNeto}
        />

        <button type='buttom'
                onClick={handleCalcular}
        >
            Calcular
        </button>

        </>
    )
}

export default Ejercicio01