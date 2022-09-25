import React from 'react'
import './Footer.css'
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";





function Footer(){
    return(
        <div className='footer'>

                <div className='logo'>
                    <a href=".." className='logo'><IoLogoInstagram /></a>
                </div>

                <div className='logo' >
                    <a href=".." id="youtube" className='logo'><IoLogoYoutube /></a>
                </div>

                <div className='logo'>
                    {/* <a href=""><IoLogoInstagram /></a> */}
                </div>
            
        </div>
    )
}

export default Footer