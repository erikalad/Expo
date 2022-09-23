import React, { useState } from 'react'
import './Sorteo.css'
import nrorandom from './js/Sorteo.js'
import Swal from 'sweetalert2'


export default function Sorteo(){

    const [ primero, setPrimero] = useState("")
    const [ segundo, setSegundo] = useState("")
    const [ tercero, setTercero] = useState("")
    const [ sorteos, setSorteo] = useState(false)

    function handleclick1(){
        
        Swal.fire({
            title: 'FELICIDADES!',
            text: `El ganador es ${primero.nombre} DNI:${primero.dni}`,
            icon: 'success',
            confirmButtonText: 'OK'
          })
       
    }

    function handleclick2(){
        
        Swal.fire({
            title: 'FELICIDADES!',
            text: `El ganador es ${segundo.nombre} DNI:${segundo.dni}`,
            icon: 'success',
            confirmButtonText: 'OK'
          })
       
    }

    function handleclick3(){
        
        Swal.fire({
            title: 'FELICIDADES!',
            text: `El ganador es ${tercero.nombre} DNI:${tercero.dni}`,
            icon: 'success',
            confirmButtonText: 'OK'
          })
       
    }

    function sorteo(){
        setSorteo(true)
        setPrimero(nrorandom())
        setSegundo(nrorandom())
        setTercero(nrorandom())
    }
   

    return(

        <div className='container'>
            <div>
            <div><button className="btn btn-success sortear" onClick={sorteo} id={sorteos === true ? "active" : null}>SORTEAR</button></div>
            
            <button className="btn btn-success" onClick={handleclick1} >1ER PREMIO</button>
            <button className="btn btn-success" onClick={handleclick2} >2DO PREMIO</button>
            <button className="btn btn-success" onClick={handleclick3} >3ER PREMIO</button>
            </div>
        </div>
    )
}
