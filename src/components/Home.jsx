import React from "react";
import video from './../assest/Promo-tombola.mp4'
import './Home.css'

function Home(){
    return(
        <div id="home">
        <video controls className="video">
            <source src={video} autoplay="true" muted="false" type="video/mp4"  loop="true" poster=""></source>
        </video>
        </div>
    )
}

export default Home