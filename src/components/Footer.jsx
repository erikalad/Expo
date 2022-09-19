import React from 'react'
import './Footer.css'
import logo from './../assest/Asset-20.png'

function Footer(){
    return(
        <div className='footer'>
            <div className='datos'>
                <img  src={logo} alt="logo" className='img'/>
            </div>
        </div>
    )
}

export default Footer