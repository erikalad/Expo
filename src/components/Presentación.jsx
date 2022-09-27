import React from "react";
import './Presentación.css'
import img1 from './../assest/joel2.png'
import img2 from './../assest/cocinero1.jpeg'
import img3 from './../assest/cocinero2.jpeg'
import img5 from './../assest/cocinero4.jpeg'

export default function Presentación(){
    return(
        <div className="container fluid" id="información">
            <h1 className="col text-center" id="andar">ANDAR Productions</h1>
            <hr />
        
            <h5 className="col text-center">Tómbola de la Joda!!!</h5>
            <p className="col text-center"> Presenta a </p>

            
        
            
                

                    {/*---- JOEL ----*/}
                    <div className="card mt-5">
                    <h1 class="card-header bg-transparent border-success text-center" ><strong>Joel Salim</strong></h1>
                        <div className="row justify-content-md-center">
                        <div className="col-md-12 text-center">
                        <img src={img1} className="img-fluid w-100" alt="cocinero"/>
                        </div>
                        <div className="col-md-4 text-center">
                        
                        <div class="card-img-overlay">
                            <h5 className="card-title text-center mt-5" style={{marginRight:"2rem" , color:"white"}}>en ACÁ SE BAILA! Quba <br /> Via Streaming</h5>
                        </div>
                        
                        </div>
                        </div>
                    </div>




                {/*----- Carrousel cocinero -----*/}
                <div className="card mt-5">
                <div className="row justify-content-md-center">
                 <div className="col-md-12 text-center">
                <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={img2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={img5} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

                </div>
                <div className="col-md-4 text-center">
                <div class="card-img-overlay">
                            <h5 className="card-title text-center" style={{marginRight:"2rem" , color:"white"}}><h1><strong>Santiago Uribe</strong></h1><br/> Cocinero ejecutivo desde Tierra del Fuego
                                <br /> Para brindar la mejor comida en este Evento!</h5>
                        </div>
                </div>
                </div>
            </div>


        
            <div className="col-md-4 mt-5" id="entradas">
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