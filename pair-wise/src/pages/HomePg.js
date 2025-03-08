import React from 'react';
import './HomePg.css';
import homeLogo from "./../Pics/HomeLogo.png"
import { Link } from 'react-router-dom';

function HomePg() {
  return (
    <div className="App">
        <header className="App-header">
            <img
            src={homeLogo}
            alt="Home Page Logo"
            className="App-logo"
            />
            {/* <h1 className="App-title">PairConcepts</h1> */}
        </header>
        <main className="App-content">
            <h2>What do we do?</h2>
            <p>
            Our platform is designed to uncover and analyze pair-term concepts—words that frequently occur together, like “Tragedy of the Commons” or “black hole”—across a wide range of texts. By parsing large collections of documents, we track how these word pairs are used over time, across different authors, and in various contexts. Whether you’re a linguist, researcher, or curious reader, our tool offers unique insights into language patterns, revealing the evolving meanings and connections between terms in specialized or everyday usage.
            </p>
        </main>
        <Link to="/search">
          <button className="App-button">Start Searching</button>
        </Link>
        
    </div>
  );
}

export default HomePg;
