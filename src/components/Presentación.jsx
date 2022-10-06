import React from "react";
import './Presentación.css'
import { CgShoppingCart } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { ImArrowDownRight } from "react-icons/im";
import { ImArrowDownLeft } from "react-icons/im";
import { SiTwitch } from "react-icons/si";
import img1 from './../assest/passline.jpeg'
import img2 from './../assest/cocinero1.jpeg'
import img3 from './../assest/cocinero2.jpeg'
import img5 from './../assest/cocinero4.jpeg'

export default function Presentación(){
    return(
        <div className="container fluid" id="información">
        
                    {/*---- PASSLINE ----*/}
                    <div className="card mt-5" id="passline">
                        <div className="row justify-content-md-center">
                        <div className="col-md-10 text-center">
                        <img src={img1} className="img-fluid" alt="cocinero" id="img1"/>
                        </div>
                    </div>
                    </div>


{/*----- Carrousel cocinero & boton compra -----*/}
            <div className="coci-compra">
                {/*----- Carrousel cocinero -----*/}
                <div className="card mt-5" id="cocinero">
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


        
            <div className="col-md-4 mt-5 " id="entradas" >

            <h3 className="titu"><ImArrowDownRight className="ic"/><div className="noafu">NO TE QUEDES AFUERA!</div><ImArrowDownLeft className="ic"/></h3>      
            <a href="https://www.passline.com/eventos/tombola-de-la-joda-31102022"><button  type="button" className="btn btn-dark" id="entra"> COMPRÁ AHORA  <CgShoppingCart /> </button></a>
                


                    <div className="card mb-3 text-center text-bg-light" >
                    <h3 className="card-header" >SEGUINOS</h3>
                  
                    <div className="card-body" id="redes">
                        
                    <div className='logo'>
                        <a href="https://www.instagram.com/andarproductions/" className='logo' id="ig"><IoLogoInstagram /></a>
                       
                        </div>

                        <div className='logo' >
                    <a href="https://www.twitch.tv/andarproductions" id="twitch" className='logo'><SiTwitch /></a>
                    
                        </div>
                    </div>
                    </div>

            </div>
        </div>
        
        </div>
    )
}