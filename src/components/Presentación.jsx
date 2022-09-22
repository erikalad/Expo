import React from "react";
import './Presentación.css'
import img1 from './../assest/joel2.png'

export default function Presentación(){
    return(
        <div className="container fluid" id="joel">
            <h1 className="col text-center" id="andar">ANDAR Productions</h1>
            <hr />
        
            <h5 className="col text-center">Tómbola de la Joda!!!</h5>
            <p className="col text-center"> Presenta a </p>

            
        
            <div className="card mb-4">
                <div className="row">
                 <div className="col-md-12 text-center">
                <img src={img1} className="img-fluid" alt="Joel"/>
                </div>
                <div className="col-md-4 text-center">
                <div className="card-body text-center">
                    <h5 className="card-title text-center"><strong>Joel Salim</strong> en ACÁ SE BAILA! Quba <br /> Via Streaming</h5>
                </div>
                </div>
                </div>
            </div>

            <div className="col-md-4">
                 <div className="card text-bg-dark mb-3 text-center" id="ticket">
                    <div className="card-body">
                        <h5 className="card-title">Adquirí tu ticket por $150</h5>
                        <p className="card-text">Y participá por...</p>
                    </div>
                    </div>
                </div>
      
        
        </div>
    )
}