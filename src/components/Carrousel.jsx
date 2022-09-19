import React from 'react';
import './Carrousel.css';
import img1 from './../assest/img-1.jpeg'
import img2 from './../assest/img-2.jpeg'
import img3 from './../assest/img-3.jpeg'
import img4 from './../assest/img-4.jpg'


export default function Carrousel() {
    return (
        <section id="carrousel-section">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={img1} className="d-block w-100" alt="1" />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={img2} className="d-block w-100" alt="2"/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={img3} className="d-block w-100" alt="3"/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={img4} className="d-block w-100" alt="4"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </section>
    )
}
