// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navigation Bar */}

        <Routes>
          {/* Updated Route component in v6 */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
