import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import NavBar from './NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route end path='/' Component={Home}/>
        <Route end path='/about' Component={About}/>
        <Route end path='/service' Component={Service}/>
        <Route end path='/contact' Component={Contact}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
