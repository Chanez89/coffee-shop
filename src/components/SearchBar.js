import React from "react"



function SearchBar({ searchFormData, handleChange}) {
  return (
   <div className="text-center">
    <input type="text"
    name="search-form"
    id="search-form"
    className="search-form form-control-lg"
    placeholder="Let's find you a drink..."
    onChange={handleChange}
    value={searchFormData}
    />
  </div> 
    
  );
}

export default SearchBar;