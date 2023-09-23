import React, {useState} from 'react'
import { FaBeer } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) =>
          user?.name?.toLowerCase().includes(value)
        );
        props.setResults(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleChange = (value) => {
    setInput(value);
    if(!value) props.setResults([]);
    value && fetchData(value);
  }
  return (
    <div className="input-wrapper">
      <FaBeer id="search-icon"></FaBeer>
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
}
