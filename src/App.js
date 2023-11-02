
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer"
import Modal from "./components/Modal";



function App() {
  
  return (
    <div>
      <Modal />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
