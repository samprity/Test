import React from 'react'
import "./SearchResults.css";
import {SearchResult} from "./SearchResult";

export const SearchResults = ({results}) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult name={result.name} key={id}></SearchResult>;
      })}
    </div>
  );
}
