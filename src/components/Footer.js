import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter,
  faWhatsapp,
  faInstagram, 
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer class="footer-48201">
      <div class="container">
        <div class="row">
          <div class="col-md-4 pr-md-5">
            <a href="/" class="footer-site-logo d-block mb-4">OenPark</a>
            <p>Somos tu mejor opción, ¿Qué esperas para contactarnos? Estamos listos para trabajar contigo. ;)</p>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/">Acerca de</a></li>
              <li><a href="/">Proyectos</a></li>
              <li><a href="/">Servicios</a></li>
            </ul>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <li><a href="/">Misión, visión y valores</a></li>
              <li><a href="/">Equipo</a></li>
              <li><a href="/">Contacto</a></li>
            </ul>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
            <li><a href="/">Ubicación</a></li>
              <li><a href="/">Horarios</a></li>
              <li><a href="/">Galeria</a></li>
            </ul>
          </div>
          <div class="col-md text-md-center">
            <ul class="social list-unstyled">
              <li><a href="/"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
              <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
            <p class=""><a href="/" class="btn btn-tertiary btn-primary text-center">Contáctanos</a></p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <div class="copyright mt-5 pt-5">
              <p><small>&copy; 2021-2023 Todos los derechos reservados.</small></p>
            </div>
          </div>
        </div> 
      </div>
    </footer>
  )
}

export default Footer