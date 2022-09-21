import React, { useState } from 'react'
import Ganador from './Ganador.jsx'
import './Sorteo.css'
import nrorandom from './js/Sorteo.js'


export default function Sorteo(){

    const [ primero, setPrimero] = useState("")
    const [ segundo, setSegundo] = useState("")
    const [ tercero, setTercero] = useState("")

   

    return(
        <div className='container'>
            <div className="card sorteo">
            <button onClick={() => setPrimero(nrorandom())}>1ER PREMIO</button>
            {primero !== "" ? <Ganador /> : null}
            {/*EL COMPONENTE GANADOR QUIERO QUE SEA UNA PANTALLA QUE SALGA EN MODO DE ALERTA CON BOOTSTRAP*/}
            <p>NOMBRE:{primero.nombre} ULT DNI:{primero.dni}</p>
            </div>
            <div className="card sorteo">
            <button onClick={() => setSegundo(nrorandom())}>2DO PREMIO</button>
            {segundo !== "" ? <Ganador /> : null}
            <p>NOMBRE:{segundo.nombre} ULT DNI:{segundo.dni}</p>
            </div>
            <div className="card sorteo">
            <button onClick={() => setTercero(nrorandom())}>3ER PREMIO</button>
            {tercero !== "" ? <Ganador /> : null}
            <p>NOMBRE:{tercero.nombre} ULT DNI:{tercero.dni}</p>
            </div>
        </div>
    )
}
