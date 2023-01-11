import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div class="container-fluid mb-5 services">
        <div class="text-center mt-5">
            <div id="services" class="services-area area-padding">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-headline services-head text-center">
                      <h1>Nuestros Servicios</h1>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row text-center">
                  <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="about-move">
                      <div class="services-details">
                        <div class="single-services">
                          <a href="/">
                            <FontAwesomeIcon icon={faCommentsDollar} className='services-icon' size='2x' color='#ff7300' />
                          </a>
                          <h4>Venta de equipo</h4>
                          <p>
                            Soluciones de gestión para que tú estacionamiento este en orden
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="about-move">
                      <div class="services-details">
                        <div class="single-services">
                          <a href="/">
                            <FontAwesomeIcon icon={faPenRuler} className='services-icon' size='2x' color='#ff7300' />
                          </a>
                          <h4>Diseño</h4>
                          <p>
                            Tú estacionamiento adapatado a tus necesidades y las de tú negocio
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class=" about-move">
                      <div class="services-details">
                        <div class="single-services">
                          <a href="/">
                            <FontAwesomeIcon icon={faHammer} className='services-icon' size='2x' color='#ff7300' />
                          </a>
                          <h4>Instalación</h4>
                        <p>
                          Nos encargamos de hacer que tú estacionamiento cumpla su función
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services