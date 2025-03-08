import React from 'react';
import './ResultsPg.css';
import { Link } from 'react-router-dom';

function ResultsPg() {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder='i.e., “due process” or “burden of proof”' 
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default ResultsPg;