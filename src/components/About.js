import React from 'react'

function About() {
  return (
    <div id="about" class="about-area area-padding">
      <div class="container">
        <div class="row mt-5 pt-5 mt-md-4 pt-md-2 mt-sm-4 pt-sm-1 mt-xs-1 pt-xs-1">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h1>Acerca de nosotros</h1>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-left">
              <div class="single-well">
                <a href="/">
                  <img src={require('../assets/hero_assets/parking_header_dark.png')} class="w-100" alt="Acerca de OenPark"/>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-middle">
              <div class="single-well">
                <a href="/" class="text-decoration-none hover text-dark">
                  <h4 class="sec-head">Nuestro trabajo</h4>
                </a>
                <p>
                  ¡Brindarte las mejores instalaciones para tu estacionamiento!
                </p>
                <ul class="">
                  <li>
                    <i class="bi bi-check"></i> Diseño
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Instalación
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Servicio
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Mantenimiento 
                  </li>
                  <li>
                  <i class="fa-solid fa-check"></i> Reparación
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About