import React from "react";
import logo from './../assest/Asset-2-300x72.png'
import './Nav.css'

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg bg-light fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand" href="..."><img src={logo} alt="logo" className="logo"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="...">Entradas</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#premios" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {/*<img src={icono} alt="icono" style={{width:"1.5rem"}}/>*/} Premios
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#premios">Primer premio</a></li>
                  <li><a className="dropdown-item" href="#premios">Segundo premio</a></li>
                  <li><a className="dropdown-item" href="#premios">Tercer premio</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav


