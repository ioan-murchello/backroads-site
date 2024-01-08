import { useState } from 'react';
import './App.css';
import {
  About,
  Footer,
  Hero,
  Navbar,
  Services,
  Tours,
  Modal,
} from './components/index';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tourIndex, setTourIndex] = useState(0)

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  if(isOpen){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = '';
  }
 
  return (
    <>
      {isOpen && (
        <Modal closeModal={closeModal} id={tourIndex}>
          <div>Hello pidrilla</div>
        </Modal>
      )}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours openModal={openModal} setTourIndex={setTourIndex}/>
      <Footer />
    </>
  );
}

export default App;
