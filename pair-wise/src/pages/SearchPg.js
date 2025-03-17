import React, { useState } from 'react';
import './SearchPg.css';
import { Link } from 'react-router-dom';
import { fetchPapers } from "../utils/api"; // Import API function

// const mockData = [
//   {
//     title: "Innovations in Blackhole Research",
//     summary: "This article explores the latest technological innovations in the study of blackholes and how they are shaping the future of astrophysics.",
//     url: "https://example.com/blackholes-tech-innovations"
//   },
//   {
//     title: "Harnessing Blackhole Energy for the Future",
//     summary: "This article highlights the emerging solutions in harnessing the energy from blackholes and the global shift toward advanced space technologies.",
//     url: "https://example.com/blackholes-energy-solutions"
//   },
//   {
//     title: "Exploring the Final Frontier: Blackholes",
//     summary: "This article examines the latest advancements in space exploration focused on blackholes and the potential for human missions to study them.",
//     url: "https://example.com/blackholes-space-exploration"
//   },
//   {
//     title: "Blackholes: The Future of Space Science Careers",
//     summary: "This article delves into how blackhole research is influencing the future of work, particularly in the fields of astrophysics and quantum computing.",
//     url: "https://example.com/blackholes-future-of-work"
//   }
// ];

function BubblePair({ term, results }) {
  return (
    <div className="bubble-pair">
      <div className="result-bubble">
        {results.map((result, i) => (
          <div key={i} className="result-item">
            <h3>{result.title}</h3>
            <p>{result.summary}</p>
            <a href={result.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
      <div className="search-term-bubble">
        <p><strong>{term}</strong></p>
      </div>
    </div>
  );
}

function SearchPg() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!text.trim()) return; // Prevent empty searches

    setLoading(true);
    setError(null);

    try {
      const data = await fetchPapers(text); // Call API
      console.log(data);
      setOutput((prevOutput) => [...prevOutput, { term: text, results: data }]);
      setText("");
      setIsVisible(false);
    } catch (err) {
      setError("Failed to fetch search results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      {isVisible && <h1 className="title">Welcome To PairConcepts</h1>}
      <div className={`search-bar ${isVisible ? '' : 'move-down'}`}>
        <input 
          type="text" 
          placeholder='i.e., “due process” or “burden of proof”' 
          className="search-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
        <button className="filter">Filter</button>
      </div>

      {/* Results should be outside search-bar */}
      <div className="results-container">
        {output.length > 0 && (
          <div className="search-results-bubble">
            {output.map((item, index) => (
              <BubblePair key={index} term={item.term} results={item.results} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPg;
