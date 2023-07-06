import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./Searchbar.css";

export const SearchbarFetch = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:1001/tutorial-service/search/sub-topics")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const results = json.filter((subTopicName) => {
          console.log(subTopicName);
          return (
            value && subTopicName && subTopicName.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log(results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};
