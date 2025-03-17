import React from 'react';
import "./AboutPg.css";
import AboutTxt from './../components/AboutTxt';
import ContactForm from './../components/ContactForm';
import Pictures from './../components/Pictures';

function AboutPg() {
  return (
    <div>
      <div className='about'>
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
