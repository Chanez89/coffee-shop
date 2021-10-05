import React from "react"



function SearchBar({ searchFormData, handleChange}) {
  return (
    <input type="text"
    name="search-form"
    id="search-form"
    className="search-input"
    placeholder="Search drinks..."
    onChange={handleChange}
    value={searchFormData}
    />

    
  );
}

export default SearchBar;