import React from 'react'

function Contact() {
  return (
    <div id="contact" class="contact-area">
      <div class="contact-inner area-padding">
        <div class="contact-overly"></div>
        <div class="container ">
          <div class="row py-lg-5">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h1>Contáctanos</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="contact-icon text-center">
                <div class="single-icon">
                  <i class="bi bi-phone"></i>
                  <p>
                    Call: +1 5589 55488 55<br/>
                    <span>Monday-Friday (9am-5pm)</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-icon text-center">
                <div class="single-icon">
                  <i class="bi bi-envelope"></i>
                  <p>
                    Email: info@example.com<br/>
                    <span>Web: www.example.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-icon text-center">
                <div class="single-icon">
                  <i class="bi bi-geo-alt"></i>
                  <p>
                    Ubicación: Circuito colonial San bernabe #319<br/>
                    <span>NL 64103, México</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe className='w-100' height={310} id="gmap_canvas" src="https://maps.google.com/maps?q=Circuito%20colonial%20San%20bernabe%C2%A0319&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" marginheight="0" marginwidth="0">
                  </iframe>
                  <a href="https://123movies-to.org">
                  </a>
                  <br/>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-lg-5 mb-md-5 pb-sm-3 my-xs-5">
              <div class="form contact-form">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <br class="d-block d-md-none"/>
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Juan López" required />
                  </div>
                  <div class="form-group mt-3">
                    <input type="email" class="form-control" name="email" id="email" placeholder="juanlopez@gmail.com" required />
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Título" required />
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Cargando...</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Tú mensaje ha sido enviado. Gracias!</div>
                  </div>
                  <div class="text-center btn-tertiary"><button type="submit">Enviar mensaje</button></div>
                  <br class="d-block d-sm-none"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact