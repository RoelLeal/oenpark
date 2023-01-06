import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;