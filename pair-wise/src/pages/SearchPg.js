import React, { useState } from 'react';
import './SearchPg.css';
import { Link } from 'react-router-dom';
import { fetchPapers } from "../utils/api"; // Import API function

function BubblePair({ term, results }) {
  if (!Array.isArray(results)) {
    return <div>No valid results to display</div>;  // Fallback UI if results is not an array
  }
  // Check if there's an error in the results
  // Check if there's an error in the results
  if (results.length > 0 && results[0].ERROR) {
    console.log(results);  // Log the error for debugging
    return (
        <div className="bubble-pair">
            <div className="result-bubble">
                <h3>Error</h3>
                <p>{results[0].ERROR}</p>  {/* Display the error message */}
            </div>
            <div className="search-term-bubble">
              <p><strong>{term}</strong></p>
            </div>
        </div>
    );
  }
  console.log(results)
  return (
    <div className="bubble-pair">
      <div className="result-bubble">
        {/* Display the keyword once at the top */}
        <h1>{results[0]?.keyword}</h1> {/* This assumes all results have the same keyword */}
  
        {/* Map over the results and display each result */}
        {results.map((result, i) => (
          <div key={i} className="result-item">
            <h3>{result.title}</h3>
            <p> Published: {result.published}</p>
            <p>Authors: {result.authors}</p>
            <p className="sentences">{result.sentences}</p> {/* Added class 'sentences' */}
            <a href={result.source_url} target="_blank" rel="noopener noreferrer">Read more</a>
  
            {/* Add a line separator */}
            <hr className="separator" /> {/* You can style it with CSS */}
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
        <button className="search-button">Filter</button>
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
