import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faRoad } from '@fortawesome/free-solid-svg-icons';

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
            <div class="container">
              <br />
                <div class="row text-center">
                  <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="about-move">
                      <div class="services-details">
                        <div class="single-services">
                          <a href="/">
                            <FontAwesomeIcon icon={faBook} className='services-icon' size='2x' color='#ff7300' />
                          </a>
                          <h4>Auditorias y consultorias</h4>
                          <p>
                            Llevamos a cabo auditoras y consultorias para mejorar tus instalaciones
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
                            <FontAwesomeIcon icon={faBlackTie} className='services-icon' size='2x' color='#ff7300' />
                          </a>
                          <h4>Equipamiento</h4>
                          <p>
                            Proporcionamos todo el equipamiento para tu servicio de parking
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
                            <FontAwesomeIcon icon={faCar} className='services-icon' size='2x' color='#ff7300' />
                          </a>
                          <h4>Pensiones</h4>
                        <p>
                          Su lugar de estacionamiento personal de todos los dias de la semana
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <br />
                <div class="row text-center">
                  <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="about-move">
                      <div class="services-details">
                        <div class="single-services">
                          <a href="/">
                            <FontAwesomeIcon icon={faPeopleGroup} className='services-icon' size='2x' color='#ff7300' />
                          </a>
                          <h4>Floor valet</h4>
                          <p>
                            Tú vehículo en el mejor lugar para que tu no tengas que esperar largas filas
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
                            <FontAwesomeIcon icon={faListCheck} className='services-icon' size='2x' color='#ff7300' />
                          </a>
                          <h4>Logística de operaciones</h4>
                          <p>
                            Flujo de vehiculos eficiente y rápido, sin esperar tanto y sin embotellamientos
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
                            <FontAwesomeIcon icon={faRoad} className='services-icon' size='2x' color='#ff7300' />
                          </a>
                          <h4>Diseño de estacionamiento</h4>
                        <p>
                          Tú estacionamiento diseñado de manera lógica y funcional
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