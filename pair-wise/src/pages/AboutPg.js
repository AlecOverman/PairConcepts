import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./AboutPg.css";
// import Navbar from './../components/Navbar';
import AboutTxt from './../components/AboutTxt';
import ContactForm from './../components/ContactForm';
import Pictures from './../components/Pictures';

function AboutPg() {
  return (
    <div>
      <div className='app'>
        <div className='left'>
          <AboutTxt />
          <ContactForm />
        </div>
        <div className='right'>
          <Pictures />
        </div> 
      </div>
    </div>
  );
}

export default AboutPg;
