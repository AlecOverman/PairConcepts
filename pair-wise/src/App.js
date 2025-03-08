import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import AboutPg from './pages/AboutPg';
import HomePg from './pages/HomePg';
import SearchPg from './pages/SearchPg';
import ResultsPg from './pages/ResultsPg';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<HomePg />} />
          <Route path="/search" element={<SearchPg />} />
          <Route path="/about" element={<AboutPg />} />
          <Route path="/result" element={<ResultsPg />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
