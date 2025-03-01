import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import AboutTxt from './components/AboutTxt';
import ContactForm from './components/ContactForm';
import Pictures from './components/Pictures';
import AboutPg from './pages/AboutPg';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/search" element={<h1>Search Page</h1>} />
          <Route path="/about" element={<AboutPg />} />
        </Routes>
      </div>
      <div className='app'>
        <div className='left'>
          <AboutTxt />
          <ContactForm />
        </div>
        <div className='right'>
          <Pictures />
        </div> 
      </div>
    </Router>
  );
}

export default App;
