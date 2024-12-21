// Importar Componentes - Inicio - 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importar Componentes - Fin - 

// Importar Componentes - Inicio - 
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
// Importar Componentes - Fin - 

// Importar estilos - Inicio - 
import './styles/global.css'
// Importar estilos - Fin - 

export default function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}