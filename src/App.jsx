import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Componenets/Navbar';
import MainSection from '../src/Componenets/MainSection';
import About from '../src/Componenets/About';
import Services from "./Componenets/Service";
import Contact from '../src/Componenets/Contact';

const App = () => {
  return (
    
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
  
  );
};

export default App;
