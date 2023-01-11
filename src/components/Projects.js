import React from 'react';

function Projects() {
  return (
    <div id="portfolio" class="portfolio-area area-padding fix pb-5 projects">
      <div class="container">
      <div className="row py-lg-5">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-center">
              <h1>Proyectos</h1><br/>
            </div>
          </div>
        </div>
        <div class="row awesome-project-content portfolio-container">
          <div class="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfolio-item">
            <div class="single-awesome-project">
              <div class="awesome-img">
                <a href="/"><img src={require('../assets/project_assets/parking_empty.jpg')} className="h-100" alt="" /></a>
                <div class="add-actions text-center">
                  <div class="project-dec">
                    <a class="portfolio-lightbox" href="/">
                      <h4>Diseño de parking</h4>
                      <span>Te ayudamos a diseñar un estacionamiento a la medida</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
            <div class="single-awesome-project">
              <div class="awesome-img">
                <a href="/"><img src={require('../assets/project_assets/parking_block.png')} className="h-100" alt="" /></a>
                <div class="add-actions text-center">
                  <div class="project-dec">
                    <a class="portfolio-lightbox" href="/">
                      <h4>Parking</h4>
                      <span>Barreras de control para parking</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-card">
            <div class="single-awesome-project">
              <div class="awesome-img">
                <a href="/"><img src={require('../assets/project_assets/p_black_white.png')} className="h-100" alt="" /></a>
                <div class="add-actions text-center">
                  <div class="project-dec">
                    <a class="portfolio-lightbox" href="/">
                      <h4>Instalación</h4>
                      <span>Te ayudamos con todo el proceso</span>
                    </a>
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

export default Projects