import React from "react";
import './EntradasSorteo.css'
import img1 from './../assest/ticket.jpeg'
import { CgShoppingCart } from "react-icons/cg";
import img2 from './../assest/passline.jpeg'
import { ImArrowDownRight } from "react-icons/im";
import { ImArrowDownLeft } from "react-icons/im";


export default function EntradasSorteo(){
    return(
        <div className="container">
        <div className="imagen">
        <img src={img2} className="img-fluid" alt="evento" id="img1"/>   
        <img src={img1} alt='entrada' className="in"/>
         </div>
         <div className="boton-compra">
         <h3 className="titu"><ImArrowDownRight className="ic"/><div className="noafu">NO TE QUEDES AFUERA!</div><ImArrowDownLeft className="ic"/></h3>      
            <a href="https://www.passline.com/eventos/tombola-de-la-joda-31102022"><button  type="button" className="btn btn-dark" id="entra"> COMPRÁ AHORA  <CgShoppingCart /> </button></a>
        </div>
        </div>
    )
}