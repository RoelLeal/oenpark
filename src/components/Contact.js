import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e){ 
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    fetch('https://oenpark.com/form_contact.php', {
      method: "post",
      body: new URLSearchParams(formData),
    }).then(response => {
      if (response.ok) {
        alert('Gracias, formulario enviado correctamente');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Ha ocurrido un error, vuelva a intentarlo');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Ha ocurrido un error, vuelva a intentarlo');
    });
  };
  return (
    <div id="contact" className="contact-area contact">
      <div className="contact-inner area-padding">
        <div className="contact-overly"></div>
        <div className="container ">
          <div className="row py-lg-5">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h1>Contáctanos</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="contact-icon text-center">
                <div className="single-icon">
                  <FontAwesomeIcon icon={faPhone} size='2x' color='#ff7300' />
                  <p>
                    Telefono: +52 812 153 9367<br/>
                    <span>Lunes-Viernes (9am-5pm)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-icon text-center">
                <div className="single-icon">
                  <FontAwesomeIcon icon={faEnvelope} size='2x' color='#ff7300' />
                  <p>
                    Correo electronico: comercial@oenpark.com<br/>
                    <span>Web: www.oenpark.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-icon text-center">
                <div className="single-icon">
                  <FontAwesomeIcon icon={faLocationDot} size='2x' color='#ff7300' />
                  <p> 
                    AV. FUERZA AÉREA MEXICANA<br/>
                    <span>430 COLONIA FEDERAL VENUSTIANO CARRANZA  CIUDAD	CDMX CP 15700</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe className='w-100' title="Ubicación OenPark" height={375} id="gmap_canvas" src="https://maps.google.com/maps?q=Circuito%20colonial%20San%20bernabe%C2%A0319&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} marginHeight={0} marginWidth={0}>
                  </iframe>
                  <a href="www.oenpark.com">
                  </a>
                  <br/>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-lg-5 mb-md-5 pb-sm-3 my-xs-5">
              <div className="form contact-form">
                <form onSubmit={handleSubmit} method="POST" className="php-email-form">
                  <br className="d-block d-md-none"/>
                  <div className="form-group">
                    <input type="text" id="name" value={name} onChange={
                      event => setName(event.target.value)} className="form-control" placeholder="Juan López" required />
                  </div>
                  <div className="form-group mt-3">
                    <input type="email" id="email" value={email} onChange={
                      event => setEmail(event.target.value)} className="form-control" placeholder="juanlopez@gmail.com" required />
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" id="subject" value={subject} onChange={
                      event => setSubject(event.target.value)} className="form-control" placeholder="Título" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea id="message" value={message} onChange={
                      event => setMessage(event.target.value)} className="form-control" rows="5" placeholder="Mensaje" required></textarea>
                  </div>
                  <div className="my-3"></div>
                  <div className="text-center"><button type='submit' value="Submit" className='btn-form-custom'>Enviar mensaje</button></div>
                  <br className="d-block d-sm-none"/>
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