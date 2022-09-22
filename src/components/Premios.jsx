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
            <p className="card-text">2 Entradas VIP para Charlotte de Witte 5/9/2022 Mandarine Park + 2 noches de hotel + ARS $150.000</p>
    
             </div>
            </div>
            </div>


            <div className="col-md-4 mt-5">
            <div className="card ">
            <img src={entrada} className="card-img-top premio" alt="charlotte" />
             <div className="card-body">
             <h5 className="card-title">SEGUNDO PREMIO</h5>
            <p className="card-text">2 Entradas Campo Gral para Charlotte de Witte 5/9/2022 Mandarine Park + 2 noches de hotel + ARS $100.000</p>
        
             </div>
            </div>
            </div>


            <div className="col-md-4 mt-5">
            <div className="card ">
            <img src={expo} className="card-img-top premio" alt="charlotte" />
             <div className="card-body">
             <h5 className="card-title">TERCER PREMIO</h5>
            <p className="card-text">2 Pases de viernes a domingo para EXPO CANNABIS + 2 noches de hotel + ARS $50.000</p>
        
             </div>
            </div>
            </div>
        </div>
        </div>
    )
}