import React from 'react';
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <nav class="navbar opacity-1 sticky-top navbar-expand-md navbar-dark bg-dark bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand text-white mx-2 px-2 ps-lg-5 ms-lg-5 ps-md-5 ms-md-5 ps-sm-4 ms-sm-4 px-xs-2 mx-xs-2 text-center" href="/">
          <img src={require('../assets/oenwr.png')} alt="Oenpark" width="100" height="56" class="d-inline-block align-text-top"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-0 mb-lg-0">
          <li class="nav-item">
            <Link className="nav-link active text-white me-lg-1 mx-md-0 mx-sm-0 mx-xs-0 text-center hover" 
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              aria-current="page" href="/">Inicio</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white me-lg-1 me-md-1 me-sm-0 me-xs-0 text-center hover"
              activeClass="active"
              to="about"
              smooth={true}
              offset={-100}
              duration={500}
              aria-current="page" href="/">Acerca de</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white me-lg-1 me-md-1 me-sm-0 me-xs-0 text-center hover"
              activeClass="active"
              to="services"
              smooth={true}
              offset={-100}
              duration={500}
              aria-current="page" href="/">Servicios</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white me-lg-1 me-md-1 me-sm-0 me-xs-0 text-center hover" 
              activeClass="active"
              to="team"
              smooth={true}
              offset={-100}
              duration={500}
              aria-current="page" href="/">Equipo</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white me-lg-1 me-md-1 me-sm-0 me-xs-0 text-center hover"
              activeClass="active"
              to="projects"
              smooth={true}
              offset={-100}
              duration={500}
              aria-current="page" href="/">Proyectos</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white me-lg-1 pe-lg-5 px-md-2 px-sm-0 px-xs-0 me-md-5 me-sm-0 me-xs-0 text-center hover" activeClass="active"
              to="contact"
              smooth={true}
              offset={-100}
              duration={500}
              aria-current="page" href="/">Contacto</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Header