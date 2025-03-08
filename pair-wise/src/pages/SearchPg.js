import React from 'react';
import './SearchPg.css';
import { Link } from 'react-router-dom';

function SearchPg() {
  return (
    <div className="app">
      <h1 className="title">Welcome To PairConcepts</h1>
      <div className="search-container">
        <p className="search-label">Search for pair-terms</p>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder='i.e., “due process” or “burden of proof”' 
            className="search-input"
          />
          <Link to="/result">
            <button className="search-button">Search</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default SearchPg;
