import React from "react";
import img from './../assest/charlotte.jpg'
import expo from './../assest/expo-cannabis.jpeg'
import entrada from './../assest/charlotte.png'
import './Premios.css'

export default function Premios(){
    return(
        <div className="container" id="contenedor">
        <h1 className="col text-center" id="premios">PREMIOS</h1>
        
        <hr />
        <div className="row justify-content-between w-0">
        
            <div className="col-md-4 mt-5">
            <div className="card ">
            <img src={img} className="card-img-top premio" alt="charlotte" />
             <div className="card-body">
             <h5 className="card-title">PRIMER PREMIO</h5>
            <p className="card-text cartas">
                ● 2 entradas CAMPO VIP para “K NT XT ft. Charlotte de Witte” en Mandarine Park &
                Tent 5 de Noviembre 2022 23:00 hs.
                <br />
                ● Estadía en hotel por dos noches para dos adultos, Suite Executivecon check-in el dia 5/11 y
                check-out el 7/11.
                <br />
                ● $150.000.- (Ciento cincuenta mil pesos argentinos) en efectivo para gastos
                personales
            </p>
    
             </div>
            </div>
            </div>


            <div className="col-md-4 mt-5">
            <div className="card ">
            <img src={entrada} className="card-img-top premio" alt="charlotte" />
             <div className="card-body">
             <h5 className="card-title">SEGUNDO PREMIO</h5>
            <p className="card-text cartas">
                ● 2 entradas CAMPO GENERAL para “K NT XT ft. Charlotte de Witte” en Mandarine
                Park & Tent 5 de noviembre 2022 23:00 hs.
                <br />
                ● Estadía en hotel por dos noches para dos adultos, Suite con balcón con check-in el día 5/11 y
                check-out el 7/11.
                <br />
                ● $100.000.- (Cien mil pesos argentinos) en efectivo para gastos personales.
            </p>
        
             </div>
            </div>
            </div>


            <div className="col-md-4 mt-5">
            <div className="card ">
            <img src={expo} className="card-img-top premio" alt="charlotte" />
             <div className="card-body">
             <h5 className="card-title">TERCER PREMIO</h5>
            <p className="card-text cartas" > 
                ● 2 pases para los días 4,5 y 6 de noviembre 2022 para “Expo Cannabis en La Rural
                - Buenos Aires”.
                <br />
                ● Estadía en hotel por dos noches para dos adultos, Habitación Doble Superior con 2 camas grandes con check-in el día 4/11 y check
                out el 6/11.
                <br />
                ● $50.000.- (Cincuenta mil pesos argentinos) en efectivo para gastos personales.
            </p>
        
             </div>
            </div>
            </div>
        </div>
        </div>
    )
}