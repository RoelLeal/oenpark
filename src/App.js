import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Suscribe from "./components/Suscribe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 1500) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Projects />
      <Suscribe />
      <Contact />
      <Footer />
      {showButton && (
        <button onClick={handleClick} className='btn btn-danger rounded-circle btn-xl'
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "999",
          width: "4rem",
          height: "4rem"
        }}>
          <FontAwesomeIcon icon={faArrowUp} size='2x' color='#fff' />
        </button>
      )}
    </Fragment>
    
  );
}

export default App;