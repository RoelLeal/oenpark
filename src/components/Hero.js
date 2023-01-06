import React from 'react';

function Hero() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide mt-md-0 mt-sm-0 mt-xs-0" data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={require('../assets/hero_assets/parking_header_dark.png')} className="img-fluid d-block darker-image" alt="Estacionamiento"/>
                <div class="carousel-caption d-md-block align-items-center py-0 py-lg-2 py-md-2 py-sm-2 py-xs-0 my-xs-2 mb-lg-5 pb-lg-5 pb-md-5 mb-md-5 pb-sm-5 mb-sm-5">
                    <h2 class="animate__animated animate__fadeInDown">Control</h2>
                    <p>Llevamos el orden, llegada y salida de vehiculos.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={require('../assets/hero_assets/parking_header_dark2.png')} className="img-fluidd-block w-100" alt="Parking"/>
                <div class="carousel-caption d-md-block align-items-center py-0 py-lg-2 py-md-2 py-sm-2 py-xs-0 my-xs-2 mb-lg-5 pb-lg-5 pb-md-5 mb-md-5 pb-sm-5 mb-sm-5">
                    <h2>Seguridad</h2>
                    <p>Nos aseguramos que nadie entre ni salga sin que tú lo sepas.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={require('../assets/hero_assets/parking_header_dark3.png')} className="img-fluid d-block w-100" alt="Oenpark"/>
                <div class="carousel-caption d-md-block align-items-center py-0 py-lg-2 py-md-2 py-sm-2 py-xs-0 my-xs-2 mb-lg-5 pb-lg-5 pb-md-5 mb-md-5 pb-sm-5 mb-sm-5">
                    <h2>Calidad</h2>
                    <p>Instalación duradera y diseño de calidad.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Hero