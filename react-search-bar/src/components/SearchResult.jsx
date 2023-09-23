import React from 'react';
import "./SearchResults.css";

export const SearchResult = ({ name, key }) => {
  return <div className="search-result" key={key} onClick={(e) => alert(`You clicked on ${name}`)}>{name}</div>;
};
