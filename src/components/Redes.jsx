import React from "react";
import './Redes.css'
import { GrInstagram } from 'react-icons/gr';
import { BsTwitch } from 'react-icons/bs';
import img1 from './../assest/ig.png'
import img2 from './../assest/twich.png'

export default function Redes(){
    return(
        <div className="container fluid">
            <div className="artis-redes" id="redes">
                                <h1 className="col text-center" >REDES SOCIALES</h1>
                                <hr />
                                <body>
                <div class="wrap">
                    <div class="tarjeta-wrap">
                        <div class="tarjeta-redes">
                           
                            <div class="adelante card1">
                            
                            <img src={img1} className="img-fluid rounded-start" alt="Nico" id="ig"/>
                            
                            </div>
                            <div class="atras">
                            <a href="https://www.instagram.com/tomboladelajoda/" className="link-redes">
                            <h5><GrInstagram  />  @tomboladelajoda</h5>
                            </a>
                            </div>
                        </div>
                    </div>
                   <div class="tarjeta-wrap">
                        <div class="tarjeta-redes">
                            <div class="adelante card2">
                           
                            <img src={img2} className="img-fluid rounded-start" alt="..." id="tw"/>
                            
                            </div>
                            <div class="atras">
                            <a href="https://www.twitch.tv/andarproductions" className="link-redes">
                            <h5 ><BsTwitch /> @andarproductions</h5>
                            </a>
                            </div>
                        </div>
                    </div>
                     {/* <div class="tarjeta-wrap">
                        <div class="tarjeta">
                            <div class="adelante card3">
                            <img src={img8} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="atras">
                            <h5>SEBASTIÁN GALLO</h5>
                                <p>Si bien sus sonidos son bien melódicos y oscuros, así como también voladores e hipnóticos, aún conserva la presencia del género progresivo a la hora del armado de sus sets, lo que permite que el artista se destaque en cada show y que su público viaje a través de su música.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </body>
            </div>

        </div>
    )
}