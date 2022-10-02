import React from "react";
import './Quba.css'
import quba from './../assest/SPONSORS.png'

export default function Quba(){
    return(
        <div className="container">
            <h3 className="club">Club QUBA Mar del Plata</h3>
            <hr />
            <br />
            <div className="quba">
                <img src={quba} className="card-img" alt="quba"/>
            </div>
        </div>
    )
}