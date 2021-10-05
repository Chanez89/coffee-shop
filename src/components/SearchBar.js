import React, {useState} from "react"



function SearchBar() {

const [formData, setFormData] = useState("")

function handleChange(event){
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  })
}
console.log(formData)
  return (
    <input type="search"
    name="search-form"
    id="search-form"
    className="search-input"
    placeholder="Search drinks..."
    onChange={handleChange}
    />

    
  );
}

export default SearchBar;