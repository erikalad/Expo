import React from "react";
import logo from './../assest/logoandar.png'
import './Nav.css'

function Nav(){
    return(
        <div className='nav navbar navbar-expand-lg bg-black sticky-top bg-black fixed-top' id="nav">
        <div className="container-fluid">
            <img src={logo} alt="logo"  className="navbar-brand logo"/>
            
            <button className="navbar-toggler bg-light " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
                <div className="offcanvas-header bg-dark" >
                   <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="logo" className="navbar-brand logo"/></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                <a href="/" aria-current="page" className='nav-link active' style={{color:"white"}} >Home</a>
                </li>
                <li>
                <a href="#sobre-nosotros" aria-current="page" className='nav-link active'  style={{color:"white"}} >Sobre Nosotros</a>
                </li>
                <li>
                <a href="#información" aria-current="page" className='nav-link active' style={{color:"white"}} >Información</a>
                </li>
                <li>
                <a href="#redes" aria-current="page" className='nav-link active' style={{color:"white"}} >Redes Sociales</a>
                </li>
                <li>
                <a href="#premios" aria-current="page" className='nav-link active' style={{color:"white"}} >Premios</a>
                </li>
                <li>
                <a href="#entradas" aria-current="page" className='nav-link active'  style={{color:"white"}} >Entradas</a>
                </li>
                </ul>
             </div>
            </div>
        </div>
</div>
    )
}

export default Nav




