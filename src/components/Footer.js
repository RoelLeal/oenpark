import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
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
              <li><Link 
                    to="hero"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    aria-current="page" 
                    href="/">Inicio</Link></li>
              <li><Link
                    to="about"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    aria-current="page" 
                    href="/">Acerca de</Link></li>
              <li><Link
                    to="projects"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    aria-current="page" 
                    href="/">Proyectos</Link></li>
              <li><a href="/">Servicios</a></li>
            </ul>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <li><a href="/">Misión, visión y valores</a></li>
              <li><Link
                    to="team"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    aria-current="page" 
                    href="/">Equipo</Link></li>
              <li><Link 
                to="contact"
                smooth={true}
                offset={-100}
                duration={500}
                aria-current="page" href="/">Contacto</Link></li>
            </ul>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
            <li><Link 
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    aria-current="page" 
                    href="/">Ubicación</Link></li>
              <li><Link 
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    aria-current="page" 
                    href="/">Horarios</Link></li>
              <li><Link
                    to="projects"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    aria-current="page" 
                    href="/">Galeria</Link></li>
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
            <p class=""><Link class="btn btn-tertiary btn-primary text-center"
                to="contact"
                smooth={true}
                offset={-100}
                duration={500}
                aria-current="page" 
                href="/">Contáctanos</Link></p>
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