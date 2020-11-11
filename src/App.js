import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ArtigoContainer from './components/artigos/ArtigoContainer.js';
import Artigo from './components/artigos/ArtigoContainer.js';
import Contato from './components/Contato/Contato.js';
import Formulario from './components/form/Formulario.js';
import Home from './components/Home/Home.js';
import Header from './components/main-menu/Header';
import './style.scss'







function App() {
  return (
    <BrowserRouter>      
      <div className="container">  
          <Header/>
          <Home/>  
          <ArtigoContainer/>
          <Formulario/>
          <Contato/>   
      </div>
    </BrowserRouter>
  
  );
}

export default App;

//C:\ORIGAMID\React\ReactSass\meuapp




  