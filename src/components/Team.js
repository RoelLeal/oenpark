import React from 'react'

function Team() {
  return (
    <div id="team" class="about-area area-padding team">
      <div class="container">
        <div class="row mt-5 mt-md-4 pt-md-2 mt-sm-4 mt-xs-1">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h1>Equipo</h1>
            </div>
          </div>
        </div>
        <div class="row mt-4">
        <div class="container">
          <div class="row text-center mx-auto justify-content-center">
              <div class="col-xl-3 col-sm-6 mb-5">
                  <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                      <h5 class="mb-0"></h5><span class="small text-uppercase text-muted">CEO - Fundador</span>
                      <ul class="social mb-0 list-inline mt-3">
                          <li class="list-inline-item"><a href="/" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                          <li class="list-inline-item"><a href="/" class="social-link"><i class="fa fa-twitter"></i></a></li>
                          <li class="list-inline-item"><a href="/" class="social-link"><i class="fa fa-instagram"></i></a></li>
                          <li class="list-inline-item"><a href="/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                      </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team