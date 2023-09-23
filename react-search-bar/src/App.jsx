import './App.css'
import { useState } from "react";
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';

function App() {
  const [results, setResults] = useState([])
  return (
    <div className="app">
      <div className="search-bar-container">
        <SearchBar setResults={setResults}></SearchBar>
        <SearchResults results={results}></SearchResults>
      </div>
    </div>
  );
}

export default App
