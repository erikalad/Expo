import React from 'react'
import './Sponsors.css'
import img1 from '../assest/Hostinger-logo.jpeg'
import img2 from '../assest/sponsor.JPG'
import img3 from '../assest/fresh.jpeg'
import img4 from '../assest/idi.png'
import img5 from '../assest/factory.png'
import img6 from '../assest/semillas.jpeg'
import img7 from '../assest/surf.jpg'
import img8 from '../assest/lapaloma.jpg'
import img9 from '../assest/piaggine.jpeg'

export default function Sponsors(){
    return(
        <div className='container' id="sponsors">
            <h1 className="col text-center" >SPONSORS OFICIALES</h1>

            <hr />
            <div className='sponsor'>
            <img src={img1} alt=".." className='logos'/>
            <img src={img5} alt=".." className='logos'/>
            <img src={img2} alt=".." className='logos'/>
            <img src={img4} alt=".." className='logos'/>
            <img src={img3} alt=".." className='logos'/>
            <img src={img6} alt=".." className='logos'/>
            <img src={img7} alt=".." className='logos'/>
            <img src={img8} alt=".." className='logos'/>
            <img src={img9} alt=".." className='logos'/>
            </div>
        </div>
       
    )
}