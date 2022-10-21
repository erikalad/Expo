import React from 'react'
import './Sponsors.css'
import img1 from '../assest/Hostinger-logo.jpeg'
import img2 from '../assest/sponsor.JPG'
import img3 from '../assest/fresh.jpeg'
import img4 from '../assest/idi.png'
import img5 from '../assest/factory.png'



export default function Sponsors(){
    return(
        <div className='container'>
            <h1 className="col text-center" >CON LA COLABORACIÓN Y APOYO</h1>

            <hr />
            <div className='sponsor'>
            <img src={img1} alt=".." className='logos'/>
            <img src={img5} alt=".." className='logos'/>
            <img src={img2} alt=".." className='logos'/>
            <img src={img4} alt=".." className='logos'/>
            <img src={img3} alt=".." className='logos'/>
           
            
            </div>
        </div>
       
    )
}