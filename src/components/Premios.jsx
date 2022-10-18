import React from "react";
import img from './../assest/charlotte.jpg'
import expo from './../assest/expo-cannabis.jpeg'
import entrada from './../assest/charlotte.png'
import './Premios.css'
import img1 from '../assest/04.jpg'
import img2 from '../assest/05.jpg'
import img3 from '../assest/06.jpg'

export default function Premios(){
    return(
        <div className="container" id="contenedor">
        <h1 className="col text-center" id="premios">PREMIOS</h1>
        
        <hr />
        <div className="row justify-content-between w-0">
        
            <div className="col-md-4 mt-5">
            <div className="card ">
            <img src={img1} className="card-img-top premio" alt="charlotte" />
            </div>
            </div>


            <div className="col-md-4 mt-5">
            <div className="card ">
            <img src={img2} className="card-img-top premio" alt="charlotte" />
    
            </div>
            </div>


            <div className="col-md-4 mt-5">
            <div className="card ">
            <img src={img3} className="card-img-top premio" alt="charlotte" />
             </div>
            </div>
            </div>
        </div>
     
    )
}