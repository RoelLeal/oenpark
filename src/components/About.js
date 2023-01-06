import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div id="about" class="about-area area-padding">
      <div class="container">
        <div class="row mt-5 mt-md-4 pt-md-2 mt-sm-4 mt-xs-1">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h1>Acerca de nosotros</h1>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6 col-sm-6 col-xs-12 pb-4">
            <div class="well-left">
              <div class="single-well">
                <a href="/">
                  <img src={require('../assets/about_assets/barra.jpg')} class="w-100" alt="Acerca de OenPark"/>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-middle">
              <div class="single-well">
                <a href="/" class="text-decoration-none hover text-dark">
                  <h4 class="sec-head ms-3">Nuestro trabajo</h4>
                </a>
                <p class="ms-3">
                  ¡Brindarte las mejores instalaciones para tu estacionamiento!
                </p>
                <ul class="ms-3 list-unstyled">
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="text-primary pe-1"/> Diseño de estacionamiento
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="text-primary pe-1"/> Sistemas de Control de Acceso Vehicular
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="text-primary pe-1"/> Operación y Administración de Estacionamientos
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="text-primary pe-1"/> Auditoría de procesos
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="text-primary pe-1"/> Auditoría de entradas y salidas
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