import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Formulario from './components/form/Formulario.js';
import Home from './components/Home/Home.js';
import Header from './components/main-menu/Header';
import './style.scss'


function App() {
  return (
    <BrowserRouter>      
      <div className="container">  
          <Header/>         
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<Formulario/>}/>
          </Routes>        
        
      </div>
    </BrowserRouter>
  
  );
}

export default App;

//C:\ORIGAMID\React\ReactSass\meuapp




  